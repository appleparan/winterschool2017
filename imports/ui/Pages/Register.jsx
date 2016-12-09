import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import { IndexLink, Link, browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export class RegisterInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <section className="registration-info">
          <a name="registration" className="anchor"></a>
          <Row><Col xs={12}>
            <h1 className="section-header">Registration</h1>
          </Col></Row>
          <Row><Col xs={12}>
            <p> Early Registration Fee : <i className="fa fa-krw" aria-hidden="true"></i> 200,000 won </p>
            <p> On-site Registration Fee : <i className="fa fa-krw" aria-hidden="true"></i> 300,000 won </p>
            <p> Registration Fee includes : Dinner (Monday,Tuesday), Coffee and Snacks</p>
            <ul>
              <li>Early Registration Deadline : <strike> Dec 8, 2016 </strike> (Wed.) Dec 14, 2016 </li>

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
          <Col xs={12} smOffset={4} sm={4}>
          <section  className="get-ticket-btn">
            <LinkContainer to="/profile">
              <Button bsStyle="primary" bsSize="large"> Get a Ticket! </Button>
            </LinkContainer>
          </section>
        </Col>
      </Row>
    </Grid>
    )
  }
}
