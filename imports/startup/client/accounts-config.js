import React from 'react';
// import { Accounts } from 'meteor/std:accounts-bootstrap';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});


Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
  loginPath: '/signin',
  signUpPath: '/signup',
  profilePath: '/profile',
  requireEmailVerification: true,
  minimumPasswordLength: 8

});
