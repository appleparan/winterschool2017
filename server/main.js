import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
// get mailgun settings
import { MailURL } from '/imports/startup/server/mail-url.js';

// import '/imports/startup/server';
// import '/imports/startup/both';

Meteor.startup(() => {
  // code to run on server at startup
  check(MailURL, String);
  process.env.MAIL_URL = MailURL;
});
