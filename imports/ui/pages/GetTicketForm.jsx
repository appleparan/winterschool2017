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
      agreedKoreanPrivacyPolicy : false,
      korName : '',
      mobilePhoneNum : '',
      nationality : '',
      engLastName : '',
      engFirstName : '',
      affiliation : '',
      position : '',
      advisorName : '',
      willPresentPoster : false
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

  handleOnChange(_change) {
    this.setState(_change);
  }

  handleKorOnSubmit(event) {
    // event.preventDefault();

    Meteor.call('tickets.insertKor', {
      isKorean : true,
      email : Meteor.user().emails[0].address,
      agreedKoreanPrivacyPolicy : this.state.agreedKoreanPrivacyPolicy,
      korName : this.state.korName.trim(),
      mobilePhoneNum : this.state.mobilePhoneNum.trim(),
      engLastName : this.state.engLastName.trim(),
      engFirstName : this.state.engFirstName.trim(),
      affiliation : this.state.affiliation.trim(),
      position : this.state.position.trim(),
      advisorName : this.state.advisorName.trim(),
      willPresentPoster : this.state.willPresentPoster
    }, (err, res) => {
      if (err) {
        event.preventDefault();
        alert(err);
      } else {
        // success!
      }
    });

  }

  handleNonKorOnSubmit(event) {
    // event.preventDefault();

    Meteor.call('tickets.insertNonKor', {
      isKorean : false,
      email : Meteor.user().emails[0].address,
      nationality : this.state.nationality.trim(),
      engLastName : this.state.engLastName.trim(),
      engFirstName : this.state.engFirstName.trim(),
      affiliation : this.state.affiliation.trim(),
      position : this.state.position.trim(),
      advisorName : this.state.advisorName.trim(),
      willPresentPoster : this.state.willPresentPoster
    }, (err, res) => {
      if (err) {
        event.preventDefault();
        alert(err);
      } else {
        // success!
      }
    });
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
                this.state.isKorean && !this.state.isNonKorean && <Form onSubmit={ this.handleKorOnSubmit.bind(this) }>
                    <RegisterPollFormKor onChange={ this.handleOnChange.bind(this) } />
                    <RegisterPollFormCommon onChange={ this.handleOnChange.bind(this) } />
                    <Button bsSize="large" block type="submit"> 제출 및 결제하기 </Button>
                  </Form>
              }
              {
                !this.state.isKorean && this.state.isNonKorean && <Form onSubmit={ this.handleKorOnSubmit.bind(this) } >
                  <RegisterPollFormNonKor onChange={ this.handleOnChange.bind(this) } />
                  <RegisterPollFormCommon onChange={ this.handleOnChange.bind(this) } />
                  <Button bsSize="large" block type="submit"> Submit  </Button>
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
