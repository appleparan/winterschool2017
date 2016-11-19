import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Accounts, STATES } from 'meteor/std:accounts-basic';

// import styles
import '/imports/ui/styles/winterschool2017.scss';

// Layouts
import { AppContainer } from '/imports/ui/containers/AppContainer.jsx';

// Pages
import { Overview } from  '/imports/ui/pages/Overview.jsx';
import { Program } from  '/imports/ui/pages/Program.jsx';
import { Schedule } from  '/imports/ui/pages/Schedule.jsx';
import { Venue } from  '/imports/ui/pages/Venue.jsx';

import { RegisterInfo } from '/imports/ui/pages/Register.jsx'
import { GetTicketForm } from '/imports/ui/pages/GetTicketForm.jsx'
import { RegisterSuccess } from '/imports/ui/pages/RegisterSuccess.jsx'
import { SignIn, SignUp, Profile, PasswordReset } from '/imports/ui/Components/Account.jsx'

Meteor.startup( () => {
  render(
    <Router history={ browserHistory } >
      <Route path="/" components={ AppContainer }>
        <IndexRoute component={ Overview } />
        <Route path="program" component={ Program } />
        <Route path="schedule" component={ Schedule } />
        <Route path="venue" component={ Venue } />
        <Route path="register" component={ RegisterInfo } />
        // <Route path="registered" component={ RegisterSuccess } />
        <Route path="getticket" component={ GetTicketForm} />
        <Route path="signin" component={ SignIn } />
        <Route path="signup" component={ SignUp } />
        <Route path="profile" component={ Profile } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
