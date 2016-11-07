import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// import styles
import '/imports/ui/styles/winterschool2017.scss';

// Layouts
import { AppContainer } from '/imports/ui/containers/AppContainer.jsx';

// Pages
import { Overview } from  '/imports/ui/pages/Overview.jsx';
import { Program } from  '/imports/ui/pages/Program.jsx';
import { Schedule } from  '/imports/ui/pages/Schedule.jsx';
import { Venue } from  '/imports/ui/pages/Venue.jsx';

import { Register } from '/imports/ui/pages/Register.jsx'
import { RegisterSuccess } from '/imports/ui/pages/RegisterSuccess.jsx'

Meteor.startup( () => {
  render(
    <Router history={ browserHistory } >
      <Route path="/" components={ AppContainer }>
        <IndexRoute component={ Overview } />
        <Route path="program" component={ Program } />
        <Route path="schedule" component={ Schedule } />
        <Route path="venue" component={ Venue } />
        <Route path="register" component={ Register } />
        <Route path="registered" component={ RegisterSuccess } />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
