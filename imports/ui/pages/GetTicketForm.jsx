 import { check, Match } from 'meteor/check';
// import { Accounts } from 'meteor/std:accounts-bootstrap';
import { Accounts } from 'meteor/std:accounts-ui';
// import { Accounts } from 'meteor/accounts-base';

import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar, Well,
    Form, FormGroup, FormControl, ControlLabel, HelpBlock,
    Radio
 } from 'react-bootstrap';
import ReactDOM, { findDOMNode } from 'react-dom';
import { IndexLink, Link, browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Script from 'react-load-script';
import Tracker from 'tracker-component';

import { RegisterPollFormKor, RegisterPollFormNonKor, RegisterPollFormCommon } from './RegisterPollForm.jsx';
// import { EmailForm } from './EmailVerification.jsx';

export class GetTicketForm extends Tracker.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKorean : false,
      isNonKorean : false,
      userKorSpec : {
        agreedKoreanPrivacyPolicy : false,
        korName : '',
        mobilePhoneNum : '',
      },
      userNonKorSpec : {
        nationality : '',
      },
      userCommon : {
        engLastName : '',
        engFirstName : '',
        affliation : '',
        position : '',
        advisorName : '',
        isPresentPoster : false
      }
    };
    this.autorun(() => {
      this.setState({
        isAuthenticated: Meteor.user()
      });
    });
  }

  handleKor(event) {
    this.setState({ isKorean : true });
    this.setState({ isNonKorean : false });
  }

  handleNonKor(event) {
    this.setState({ isKorean : false });
    this.setState({ isNonKorean : true });
  }

  handleKorOnSubmit(event) {
    event.preventDefault();

    ticket = {
      isKorean : true,
      email : Meteor.user().emails[0].address,
      agreedKoreanPrivacyPolicy : this.state.userKorSpec.agreedKoreanPrivacyPolicy,
      korName : this.state.userKorSpec.korName.trim(),
      mobilePhoneNum : this.state.userKorSpec.mobilePhoneNum.trim(),
      engLastName : this.state.userCommon.engLastName.trim(),
      engFirstName : this.state.userCommon.engFirstName.trim(),
      affliation : this.state.userCommon.affliation.trim(),
      position : this.state.userCommon.position.trim(),
      advisorName : this.state.userCommon.advisorName.trim(),
      isPresentPoster : this.state.userCommon.isPresentPoster
    }

    console.log(ticket);

    Meteor.call('tickets.insertKor', ticket);
    alert("submitted!");
  }

  handleNonKorOnSubmit(event) {
    event.preventDefault();

    ticket = {
      isKorean : false,
      email : Meteor.user().emails[0].address,
      nationality : this.state.userNonKorSpec.nationality.trim(),
      engLastName : this.state.userCommon.engLastName.trim(),
      engFirstName : this.state.userCommon.engFirstName.trim(),
      affliation : this.state.userCommon.affliation.trim(),
      position : this.state.userCommon.position.trim(),
      advisorName : this.state.userCommon.advisorName.trim(),
      isPresentPoster : this.state.userCommon.isPresentPoster
    }

    console.log(ticket);

    Meteor.call('tickets.insertNonKor', ticket);
  }

  sendCommonUser(_state) {
    this.setState({
      userCommon : _state
    })
  }

  sendKorUser(_state) {
    this.setState({
      userKorSpec : _state
    })
  }

  sendNonKorUser(_state) {
    this.setState({
      userNonKorSpec : _state
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
          <Well bsSize="large">
            <section className="RegisterForm">
              <Row>
                <ButtonToolbar>
                  <Col xs={6}>
                    <Col xsOffset={3}>
                      <Button bsSize="large" onClick={ this.handleKor.bind(this) } > Korean </Button>
                    </Col>
                  </Col>
                  <Col xs={6}>
                    <Col xsOffset={3}>
                      <Button bsSize="large" onClick={ this.handleNonKor.bind(this) }> Non-Korean </Button>
                    </Col>
                  </Col>
                </ButtonToolbar>
              </Row>
              {
                this.state.isKorean && !this.state.isNonKorean && <Form>
                    <RegisterPollFormKor sendRegisterKorUser={ this.sendKorUser.bind(this) } />
                    <RegisterPollFormCommon sendRegisterCommonUser={ this.sendCommonUser.bind(this) } />
                    <Button bsSize="large" block type="submit" onSubmit={ this.handleKorOnSubmit.bind(this) }> 제출 및 결제하기 </Button>
                  </Form>
              }
              {
                this.state.isNonKorean && !this.state.isKorean && <Form>>
                  <RegisterPollFormNonKor sendRegisterNonKorUser={ this.sendNonKorUser.bind(this) } />
                  <RegisterPollFormCommon sendRegisterCommonUser={ this.sendCommonUser.bind(this) } />
                  <Button bsSize="large" block type="submit" onSubmit={ this.handleKorOnSubmit.bind(this) }> Submit  </Button>
                </Form>
              }
              </section>
         </Well>
        </Col>
      </Row>
    </Grid>
    )
  }
}
