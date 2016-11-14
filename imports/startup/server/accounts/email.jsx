import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.emailTemplates.siteName = "Winter School 2017";
Accounts.emailTemplates.from     = "Winter School 2017 (No reply) <mail@mediviewsoft.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[Winter School 2017] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "csedept@yonsei.ac.kr",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
