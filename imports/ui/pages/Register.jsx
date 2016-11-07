import { check, Match } from 'meteor/check';
// import { Accounts } from 'meteor/std:accounts-ui';
import { Accounts } from 'meteor/accounts-base';

import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar, Well,
    Form, FormGroup, FormControl, ControlLabel, HelpBlock,
    Radio
 } from 'react-bootstrap';
import ReactDOM, { findDOMNode } from 'react-dom';
import Script from 'react-load-script';

import { RegisterPollFormKor, RegisterPollFormNonKor, RegisterPollFormCommon } from './RegisterPollForm.jsx';
import { EmailForm } from './EmailVerification.jsx';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isKorean : false,
      isNonKorean : false,
      userEmail : {
        email : '',
        isEmailVerified : false,
      },
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
        afflication : '',
        position : '',
        advisorName : '',
        isPresentPoster : false
      }
    };
  }

  handleKor(event) {
    this.setState({ isKorean : true });
    this.setState({ isNonKorean : false });
  }

  handleNonKor(event) {
    this.setState({ isKorean : false });
    this.setState({ isNonKorean : true });
  }

  sendEmails(_state) {
    this.setState({
      userEmail : _state
    })
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
        <section className="Registration">
          <a name="registration" className="anchor"></a>
          <Row><Col xs={12}>
            <h1 className="section-header">Registration</h1>
          </Col></Row>
          <Row><Col xs={12}>
            <p> Registration Fee : <i className="fa fa-krw" aria-hidden="true"></i> 200,000 </p>
            <p> Registration Fee includes : Dinner (Monday,Tuesday), Coffee and Snacks</p>
            <ul>
              <li>Early Registration Deadline : Nov 15, 2016 </li>
              <li>Additional Registration Deadline : Nov 30, 2016 </li>
              <li>사전에 온라인 등록 및 결제를 하여야 참여가능하며, 현장등록은 불가합니다.</li>
              <li><strong>결제 금액 환불 및 취소는 불가</strong>하므로 신중히 결제하여 주시기 바랍니다.</li>
              <li>Registration fee for foreign A3 participants will be exempted.</li>
            </ul>
          </Col></Row>
          <Row><Col xs={12}>
            <span className="hidden">
              <h2 className="section-subheader">준비물</h2>
              <ul>
                <li>개인 노트북 지참 (딥러닝 실습용, 사용 소프트웨어 및 예제 미리설치 필요)</li>
                <li>Program Install Guideline (*맥북 사용 가능)</li>
                <li>사전 : 홈페이지 '실습파일 다운로드' 에서 파일 다운로드 가능 (*사전등록자에 한해 개별메일 안내)</li>
                <li>현장 : 해당 안내물 배포</li>
              </ul>
            </span>
          </Col></Row>
        </section>

        <Row>
          <Col xs={12}>
          <Well bsSize="large">
            <section className="RegisterForm">
              <EmailForm sendEmails={ this.sendEmails.bind(this) } />
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
                this.state.isKorean && !this.state.isNonKorean && <div>
                    <RegisterPollFormKor sendRegisterKorUser={ this.sendKorUser.bind(this) } />
                    <RegisterPollFormCommon sendRegisterCommonUser={ this.sendCommonUser.bind(this) } />
                    <Button bsSize="large" block type="submit"> 제출 및 결제하기 </Button>
                  </div>
              }
              {
                this.state.isNonKorean && !this.state.isKorean && <div>
                  <RegisterPollFormNonKor sendRegisterNonKorUser={ this.sendNonKorUser.bind(this) } />
                  <RegisterPollFormCommon sendRegisterCommonUser={ this.sendCommonUser.bind(this) } />
                  <Button bsSize="large" block type="submit"> Submit  </Button>
                </div>
              }
              </section>
         </Well>
        </Col>
      </Row>
    </Grid>
    )
  }
}
