import { Meteor } from 'meteor/meteor';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import React from 'react';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Tracker from 'tracker-component';

import { GetTicketForm } from '/imports/ui/pages/GetTicketForm.jsx';

export class Profile extends Tracker.Component {
  constructor(props) {
   super(props);
   this.autorun(() => {
     this.setState({
       isAuthenticated: Meteor.user()
     });
   });
  }

  componentWillMount() {
    // Check that the user is logged in before the component mounts
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signin');
    }
  }
  
  render() {
    return (
      <Grid>
        <Row>
          {
            this.state.isAuthenticated && <div>
              <Accounts.ui.LoginForm formState={ STATES.PROFILE } />
              <GetTicketForm />
            </div>
          }
       </Row>
     </Grid>
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
