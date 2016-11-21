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
import Iamport from 'iamport';

import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

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

    const fee_amount = 1000;
    var iamport = new Iamport({
      impKey: process.env.IAMPORT_KEY,
      impSecret: process.env.IAMPORT_SECRET
    });
    // Cannot read property 'agreedKoreanPrivacyPolicy' of undefined(…)
    if (!this.state.iamportLoaded || iamport == undefined) {
      Alert.error('Failed to load scripts, please refresh page.', {
        position: 'top'
      });
    } else {
      IMP.request_pay({
        pg : 'uplus',
        pay_method : 'card',
        merchant_uid : 'merchant_' + new Date().getTime(),
        name : '2017 Winter School in Imaging Science',
        amount : fee_amount,
        buyer_email : Meteor.user().emails[0].address,
        buyer_name : this.state.korName,
        buyer_tel : this.state.mobilePhoneNum
      }, function(rsp) {
          if ( rsp.success ) {
            // 아임포트 고유 아이디로 결제 정보를 조회
            iamport.payment.getByImpUid({
              imp_uid: rsp.imp_uid
            }).then(function(result) {
              if (result.response.status == 'paid' && amount == fee_amount) {
                var msg = '결제가 완료되었습니다.';
                msg += '결제 금액 : ' + rsp.paid_amount;
                Alert.info(msg, {
                  position: 'top'
                });

                if (_submitKorForm(true)) {
                  browserHistory.push('/profile');
                }
              } else {
                // cancel payment
                iamport.payment.cancel({
                  imp_uid: rsp.imp_uid
                });

                var msg = '결제과 완료되지 않았습니다. 다시 결제하여 주십시요.';
                Alert.error(msg, {
                  position: 'top'
                });
                alert(msg);

                if (_submitKorForm(false)) {
                  browserHistory.push('/profile');
                }
              }
            }).catch(function(error){
              console.log(error);
            });
          } else {
              var msg = '결제에 실패하였습니다.';
              msg += '에러내용 : ' + rsp.error_msg;
              Alert.error(msg, {
                position: 'top'
              });
              alert(msg);
          }
      });
    }
  }

  _submitKorForm (_isPaid) {
    Meteor.call('tickets.insertKor', {
      isKorean : true,
      isPaid : _isPaid,
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
        // success!
        Alert.info("You failed registration!", {
          position: 'top'
        });

        return false;
      } else {
        // success!
        Alert.info("You've succefully registred!", {
          position: 'top'
        });

        return true;
      }
    });

    return false;
  }

  handleIamPortCreate (e) {
    this.setState({ iamportLoaded : false })
  }

  handleIamPortLoad (e) {
    IMP.init('imp33162581');

    this.setState({ iamportLoaded : true })
  }

  handleIamPortLoadError (e) {
    Alert.error("Failed to load scripts, please refresh page.", {
      position: 'top'
    });

  }

  handleNonKorOnSubmit(event) {
    event.preventDefault();

    Meteor.call('tickets.insertNonKor', {
      isKorean : false,
      isPaid : false,
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
        Alert.error(err, {
          position: 'top'
        });
      } else {
        // success!
        Alert.success('You have succefully registred!', {
          position: 'top'
        });
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
      <Alert stack={{limit: 3}} />
    </Grid>
    )
  }
}
