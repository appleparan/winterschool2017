import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export class RegisterIntro extends React.Component {
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <Grid>
        <section className="RegistrationIntro">
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
          <div className="well" style={wellStyles}>
           <Button bsStyle="primary" href="https://goo.gl/forms/DdbIepxJOGShQ7j32" bsSize="large" block> Online  Registration </Button>
           <Button bsSize="large" block> Go Payment </Button>
         </div>
        </section>
      </Grid>
    )
  }
}
