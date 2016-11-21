import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Accounts, STATES } from 'meteor/std:accounts-basic';

// import styles
import '/imports/ui/Styles/winterschool2017.scss';

// Layouts
import { AppContainer } from '/imports/ui/Containers/AppContainer.jsx';

// Pages
import { Overview } from  '/imports/ui/Pages/Overview.jsx';
import { Program } from  '/imports/ui/Pages/Program.jsx';
import { Schedule } from  '/imports/ui/Pages/Schedule.jsx';
import { Venue } from  '/imports/ui/Pages/Venue.jsx';

import { RegisterInfo } from '/imports/ui/Pages/Register.jsx'
import { GetTicketForm } from '/imports/ui/Pages/GetTicketForm.jsx'
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
        <Route path="getticket" component={ GetTicketForm} />
        <Route path="signin" component={ SignIn } />
        <Route path="signup" component={ SignUp } />
        <Route path="profile" component={ Profile } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
