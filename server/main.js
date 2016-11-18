import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
// get mailgun settings
import '/imports/startup/server/index.jsx';
import { MailURL } from '/imports/startup/server/settings/mail-url.js';
import { iamportKey, iamportSecret } from '/imports/startup/server/settings/iamport.js';

Meteor.startup(() => {
  // code to run on server at startup
  check(MailURL, String);
  process.env.MAIL_URL = MailURL;
});
