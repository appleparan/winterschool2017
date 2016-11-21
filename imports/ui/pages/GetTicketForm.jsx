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
import Popup from 'react-popup';
import Tracker from 'tracker-component';

import { RegisterPollFormKor, RegisterPollFormNonKor, RegisterPollFormCommon } from './RegisterPollForm.jsx';

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
      willPresentPoster : false,
      iamportLoaded : false
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
    event.preventDefault();

    if (!this.state.iamportLoaded) {
      alert("Failed to load scripts, please refresh page.");
    } else {
      IMP.request_pay({
        pg : 'uplus',
        pay_method : 'card',
        merchant_uid : 'merchant_' + new Date().getTime(),
        name : '주문명:결제테스트',
        amount : 200000,
        buyer_email : Meteor.user().emails[0].address,
        buyer_name : this.state.korName,
        buyer_tel : this.state.mobilePhoneNum
      }, function(rsp) {
          if ( rsp.success ) {
              var msg = '결제가 완료되었습니다.';
              msg += '고유ID : ' + rsp.imp_uid;
              msg += '상점 거래ID : ' + rsp.merchant_uid;
              msg += '결제 금액 : ' + rsp.paid_amount;
              msg += '카드 승인번호 : ' + rsp.apply_num;
              Popup.alert(msg);
              Popup.alert('You have paid registration fee, click ok to submit information to server');

              Meteor.call('tickets.insertKor', {
                isKorean : true,
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
                  alert(err);
                } else {
                  // success!
                  Popup.alert('You have succefully registred!');
                  browserHistory.push('/profile');
                }
              });
          } else {
              var msg = '결제에 실패하였습니다.';
              msg += '에러내용 : ' + rsp.error_msg;
              alert(msg);
          }
      });
    }
  }

  handleIamPortCreate (e) {
    this.setState({ iamportLoaded : false })
  }

  handleIamPortLoad (e) {
    IMP.init('imp33162581');
    this.setState({ iamportLoaded : true })
  }

  handleIamPortLoadError (e) {
    alert("Failed to load scripts, please refresh page.");
  }

  handleNonKorOnSubmit(event) {
    event.preventDefault();

    Meteor.call('tickets.insertNonKor', {
      isKorean : false,
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
        alert("You've sucessfully registerd!");
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
                    <Script
                      url="https://service.iamport.kr/js/iamport.payment-1.1.2.js"
                      onError={this.handleIamPortCreate.bind(this)}
                      onError={this.handleIamPortLoadError.bind(this)}
                      onLoad={this.handleIamPortLoad.bind(this)}
                    />
                    <Button bsSize="large" block type="submit"> 제출 및 결제하기 </Button>
                  </Form>
              }
              {
                !this.state.isKorean && this.state.isNonKorean && <Form onSubmit={ this.handleNonKorOnSubmit.bind(this) } >
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
