import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
import { browserHistory } from 'react-router';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});


Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
  loginPath: '/signin',
  onSignedInHook: () => browserHistory.push('/register'),
  onPostSignUpHook: () => browserHistory.push('/register'),
  signUpPath: '/signup',
  profilePath: '/profile',
  requireEmailVerification: true,
  minimumPasswordLength: 8
});
