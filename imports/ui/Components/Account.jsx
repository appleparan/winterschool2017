import { Meteor } from 'meteor/meteor';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import { Tracker } from 'meteor/tracker';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { compose } from 'react-komposer';
import { Loading } from 'react-loading';
import TrackerComponent from 'tracker-component';

import { GetTicketForm } from '/imports/ui/Pages/GetTicketForm.jsx';
import { ProfileRegistrationInfo } from '/imports/ui/Pages/RegistrationInfo.jsx';

import { Tickets } from '/api/ticket/ticket.jsx';

function getTrackerLoader(reactiveMapper) {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
}

// usage
function reactiveMapper(props, onData) {
  if (Meteor.subscribe('tickets.myTicket').ready()) {
    const ticket = Tickets.findOne({ owner : Meteor.userId() });

    onData(null, { ticket });
  };
}

const options = {
  loadingHandler: () => (
    <Grid>
      <Row>
        Loading....
      </Row>
    </Grid> )
};

// <Loading type='spinningBubbles' color='#e3e3e3' width='300' height='300' />
class ProfileConditional extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!(this.props.ticket == null) && !(this.props.ticket == undefined) && this.props.ticket) {
      return (
        <Grid>
          <Row>
            <Accounts.ui.LoginForm formState={ STATES.PROFILE } />
            <ProfileRegistrationInfo ticket={ this.props.ticket } />
            <Button bsStyle="info"> Download Registration Certification (will be avilable soon) </Button>
          </Row>
        </Grid>
      )
    }

    return (
      <Grid>
        <Row>
          <Accounts.ui.LoginForm formState={ STATES.PROFILE } />
          <GetTicketForm />
        </Row>
      </Grid>
     )
  }
}

const ProfileConditionalContainer = compose(getTrackerLoader(reactiveMapper), options)(ProfileConditional);

export class Profile extends TrackerComponent.Component {
  constructor(props) {
    super(props);

    this.autorun(() => {
     this.setState({
       isAuthenticated: Meteor.user()
     });
    });
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signin');
    }
  }

  componentDidUpdate() {
     // Navigate to a sign in page if the user isn't authenticated when data changes
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signin');
    }
  }

  render() {
    return (
      <ProfileConditionalContainer />
   )
  }
}

export class SignIn extends React.Component {
  render() {
   return (
     <Grid>
       <Row>
         <Col xs={12} smOffset={3} sm={6}>
            <Accounts.ui.LoginForm formState={ STATES.SIGN_IN } />
            <ul>
            <li>If you don't have any account, please register your email</li>
            <li>If you already have an account, signin with email and click the link on verification email</li>
            </ul>
         </Col>

       </Row>
     </Grid>
   )
  }
}

export class SignUp extends React.Component {
  render() {
   return (
     <Grid>
       <Row>
         <Col xs={12} smOffset={2} sm={6}>
           <Accounts.ui.LoginForm formState={ STATES.SIGN_UP } />
         </Col>
       </Row>
     </Grid>
   )
  }
}

export class PasswordReset extends React.Component {
  render() {
   return (
     <Grid>
       <Row>
         <Col xs={12} smOffset={2} sm={6}>
           <Accounts.ui.LoginForm formState={ STATES.PASSWORD_RESET } />
         </Col>
       </Row>
     </Grid>
   )
  }
}
