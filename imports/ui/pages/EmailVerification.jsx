import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import React, { Component } from 'react';
import { Grid, Row, Col, Button,
    Form, FormGroup, FormControl, ControlLabel, HelpBlock,
 } from 'react-bootstrap';
import ReactDOM, { findDOMNode } from 'react-dom';

// https://github.com/froatsnook/meteor-valid-email
import { IsValidEmail } from 'meteor/froatsnook:valid-email';

import '/imports/api/passwordless/passwordless.jsx';

export class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      isEmailVerified : false
    };
  }

  sendEmail(_email) {
    this.setState({
      email : _email
    })
  }

  sendEmailVerified(_isEmailVerified) {
    this.setState({
      isEmailVerified : true
    })

    const _emails = {
      email : this.state.email,
      isEmailVerified : this.state.isEmailVerified
    };

    this.props.sendEmails(_emails);
  }

  render() {
    const EmailConfirmVerifiedStaticForm = () => (
      <Form><Row>
        <Col xsOffset={2} xs={6} smOffset={2} sm={8}>
          <FormGroup
            controlId="formEmailText"
          >
            <FormControl.Static>
              { this.state.email }
            </FormControl.Static>
          </FormGroup>
        </Col>
      </Row></Form>
    )

    return (
      <div>
        {
          this.state.isEmailVerified ?
            <EmailConfirmVerifiedStaticForm /> :
            <EmailAskVerificationForm sendEmail={ this.sendEmail.bind(this) } sendEmailVerified={ this.sendEmailVerified.bind(this) }/>
        }
      </div>
    )
  }
}

class EmailAskVerificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailVerificationForm : false,
      email : '',
      isEmailVerified : false
    };
  }

  sendEmailValidationState() {
    const _email = this.state.email;

    if (IsValidEmail(_email)) {
      return 'success';
    } else {
      return 'error';
    }

    return 'error';
  }

  handleEmailOnChange(ev) {
    this.setState({ email : ev.target.value });
  }

  handleAskVerifyEmailOnSubmit(ev) {
    const _email = this.state.email;

    if (IsValidEmail(_email)) {
      // show verified form
      this.setState({
        showEmailVerificationForm : true
      });

      // send email for verification
      // Meteor.sendVerificationCode(_email, {});
    } else {
      alert("Email address is not valid!");
    }
  }

  sendEmail(_email) {
    this.setState({
      email : _email
    })
  }

  sendEmailVerified(_isEmailVerified) {
    // set email verification status to true
    this.setState({
      isEmailVerified : _isEmailVerified
    })

    // show static form to make not to edit email addresss
    this.setState({
      showEmailVerificationForm : true
    });

    // send email to parent
    this.props.sendEmail(this.state.email);
    // send email verification status to parent
    this.props.sendEmailVerified(_isEmailVerified);
  }

  render() {
    return (
      <div>
        <Form horizontal>
          <Col xs={8} sm={8}>
            <FormGroup
              controlId="formEmailText"
              validationState={ this.sendEmailValidationState() }
            >
              <Col xs={2} sm={2}>
                <ControlLabel>
                Email
                </ControlLabel>
              </Col>

              <Col xs={6} sm={8}>
                <FormControl
                  type="email"
                  value={ this.state.email }
                  onChange={ this.handleEmailOnChange.bind(this) }
                  placeholder="csedept@yonsei.ac.kr"
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>
          </Col>
          <Col xs={4} sm={4}>
            <Button onClick={ this.handleAskVerifyEmailOnSubmit.bind(this) }> Verify Email </Button>
          </Col>
        </Form>
        { this.state.showEmailVerificationForm && <EmailVerificationForm sendEmail={ this.sendEmail.bind(this) } sendEmailVerified={ this.sendEmailVerified.bind(this) } /> }
      </div>
    )
  }
}

class EmailVerificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailVerificationForm : false,
      verificationCode : '',
      email : '',
      isEmailVerified : false
    };
  }

  handleVerifyEmailOnSubmit(ev) {
    const _email = this.state.email;

    if (this.isValidEmail(_email)) {
      // verify email
      Meteor.loginWithPasswordless(verifyEmail);

    } else {
      alert("Email address is not valid!");
    }
  }

  verifyEmail() {
    var user = Meteor.user();
    if(user) {
      if(user.username || !loginPasswordlessAskUsername)
        Session.set('loginPasswordlessState', 'loginPasswordlessLogout');
      else
        Session.set('loginPasswordlessState', 'loginPasswordlessAskUsername');
    }

    // if verified
    const _email = this.state.email;
    const _isEmailVerified = true;

    // send email to parent
    this.props.sendEmail(_email);
    // send emailVerification status to parent
    this.props.sendEmailVerified(_isEmailVerified);
  }

  render() {
    return (
      <Form horizontal><Row>
        <Col xsOffset={2} xs={6} smOffset={2} sm={8}>
          <FormGroup
            controlId="formEmailText"
          >
              <FormControl
                type="text"
                value={ this.state.verificationCode }
                placeholder="000000"
              />
              <HelpBlock> Enter 6 string code from your email, if you don't receive code within 30 mins, refresh page and try again</HelpBlock>
          </FormGroup>
        </Col>
        <Col xs={4} sm={2}>
          <Button onClick={ this.handleVerifyEmailOnSubmit.bind(this) } type="submit"> Submit Code  </Button>
        </Col>
      </Row></Form>
    )
  }
}
