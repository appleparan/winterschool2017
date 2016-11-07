// Get a Idea from https://github.com/florianheinemann/passwordless
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import { Email } from 'meteor/email';

import { Accounts } from 'meteor/accounts-base';

import Chance from 'chance';

Accounts.passwordless = {};

Meteor.methods({
  'accounts-passwordless.sendVerificationCode'({email, options}) {
    check(selector, String);
    check(options, Match.Optional(Match.Any));
    Accounts.passwordless.sendVerificationCode(email, options);
  },

  'accounts-passwordless.loginWithPasswordless'({options, callback}) {
    check(selector, String);
    check(options, Match.Optional(Match.Any));
    Accounts.passwordless.sendVerificationCode(email, options);
  }
});

if (Meteor.isClient) {
  var loginPasswordlessAskUsername = false;

  Session.setDefault('loginPasswordlessMessage', '');
  Session.setDefault('loginPasswordlessState', 'loginPasswordlessLogin');

  Tracker.autorun(function () {
    var user = Meteor.user();
    if(user) {
      if(user.username || !loginPasswordlessAskUsername)
        Session.set('loginPasswordlessState', 'loginPasswordlessLogout');
      else
        Session.set('loginPasswordlessState', 'loginPasswordlessAskUsername');
    }
  });

  /**
   * Request a verification code.
   * @param email
   * @param [callback]
   */
  Meteor.sendVerificationCode = function (_email, options, callback) {
    if (!callback && typeof options === 'function')
      callback = options;

    // Save the email in a Session so even if the client reloads, the email is stored
    Session.set('accounts-passwordless.email', _email);
    Meteor.call('accounts-passwordless.sendVerificationCode', _email, options, callback);
  };

  /**
   * Login with the verification code.
   * @param options code The verification code. email (optional)
   * @param [callback]
   */
  Meteor.loginWithPasswordless = function (options, callback) {
    console.log('lwpl', options);
    Accounts.callLoginMethod({
      methodArguments: [{
        email: Session.get('accounts-passwordless.email') || options.email,
        code: options.code
      }],
      userCallback: callback
    });
  };
}

if (Meteor.isServer) {
	Accounts.passwordless.emailTemplates = {
		from: "A3 Imaging School Wintershool 2017 <a3inverse@gmail.com>",
		siteName: Meteor.absoluteUrl().replace( /^https?:\/\//, '' ).replace( /\/$/, '' ),

		sendVerificationCode: {
			subject: function ( code ) {
				return "Your verification code is " + code + " for " + Accounts.passwordless.emailTemplates.siteName;
			},
			text: function ( user, code ) {
				var greeting = "Hello, ";
				return greeting + "\n" + "\n" + "Your verification code is " + code + ".\n" + "\n" + "Thanks.\n";
			}
		}
	};

	// Handler to login with passwordless
	Accounts.registerLoginHandler( 'passwordless', function ( options ) {
		if ( options.code === undefined ) return undefined; // don't handle

		check( options, {
			email: String,
			code: String
		} );

		if ( !options.email ) throw new Meteor.Error( 'No email specified' );

		return Accounts.passwordless.verifyCode( options.email, options.code );
	} );

	var codes = new Meteor.Collection( 'passwordless_codes' );
	// code is only active for 30 minutes.
	codes._ensureIndex({ email: 1 }, { expireAfterSeconds: 60 * 30, unique: true });

	/*
	 * Generate a 6 strings + digits verification code
	 * @param email The email of the user
	 */

	Accounts.passwordless.generateVerificationCode = function ( email ) {
		// var code = Math.floor( Random.fraction() * 10000 ) + '';
		var chance = new Chance();
	  const code = chance.string({length: 6});
		console.log(code);
		// force pin to 6 digits
		// code = ( '000000' + code ).slice( -6 );
		// Generate a new code
		codes.upsert( {
			email: email
		}, {
			$set: {
				code: code
			}
		} );

		return code;
	};


	/**
	 * Send a 4 digit verification code by email
	 * @param email
	 */
	Accounts.passwordless.sendVerificationCode = function ( _email, options ) {
		var email;
		var user;
		var code;

		user = Meteor.users.findOne( {
			'emails.address': _email
		} );
		// If the user doesn't exists, we'll create it when the user will verify his email
		email = _email;

		var codeInDb = codes.findOne( {
			email: _email
		} );

		if ( codeInDb ) {
			code = codeInDb.code;
		} else {
			code = Accounts.passwordless.generateVerificationCode( _email );

		}

		Email.send( {
			to: _email,
			from: Accounts.passwordless.emailTemplates.from,
			subject: Accounts.passwordless.emailTemplates.sendVerificationCode.subject( code ),
			text: Accounts.passwordless.emailTemplates.sendVerificationCode.text( user, code, _email, options )
		} );
	};

	/**
	 * Verify if the code is valid
	 * @param email
	 * @param code The code the user entered
	 */
	Accounts.passwordless.verifyCode = function ( _email, code ) {
		var user;
		var email;

		user = Meteor.users.findOne( {
			'emails.address': _email
		} );
		email = selector;


		var validCode = codes.findOne( {
			email: _email
		} );
		if ( !validCode )
			throw new Meteor.Error( 'Unknown email' );

		var now = new Date().getTime() / 1000;
		var timeToWait;

		if ( validCode.lastTry ) {
			timeToWait = validCode.lastTry.getTime() / 1000 + Math.pow( validCode.nbTry, 2 );

			if ( timeToWait > now )
				throw new Meteor.Error( 'You must wait ' + Math.ceil( timeToWait - now ) + ' seconds' );
		}

		if ( validCode.code !== code ) {
			codes.update( {
				email: email
			}, {
				$set: {
					lastTry: new Date()
				},
				$inc: {
					nbTry: 1
				}
			} );
			throw new Meteor.Error( 'Invalid verification code' );
		}
		// Clear the verification code after a succesful login.
		//codes.remove({ email: email });

		var uid;
		if ( user ) {
			uid = user._id;
		} else {
			uid = createUser( {
				email: email
			} );
			user = Meteor.users.findOne( uid );
			console.log( 'created user', uid, user );
		}

		if ( user ) {
			// Set the email as verified since he validated the code with this email
			var ve = _.find( user.emails, function ( e ) {
				return e.address === email;
			} );
			if ( ve && !ve.verified )  {
				// By including the address in the query, we can use 'emails.$' in the
				// modifier to get a reference to the specific object in the emails
				// array. See
				// http://www.mongodb.org/display/DOCS/Updating/#Updating-The%24positionaloperator)
				// http://www.mongodb.org/display/DOCS/Updating#Updating-%24pull
				Meteor.users.update( {
					_id: uid,
					'emails.address': email
				}, {
					$set: {
						'emails.$.verified': true
					}
				} );
			}
		}
		return {
			userId: uid
		};
	};
}
