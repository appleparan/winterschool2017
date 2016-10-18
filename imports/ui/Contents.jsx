import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

export default class contentsinstance extends Component {
  render() {
    return (
    <Grid>
      <section className="overview">
        <Row>
          <h3 className="section-header">Overview</h3>
        </Row>
        <Row>
          <ul>
            <li>Date : 9-11 January 2017 </li>
            <li>Location : Sonofelice, Hongcheon-Gun, Gangwon-Do, Korea</li>
          </ul>
          <ul>
            <p> The 2nd Winter School in Imaging Science will be held from 9-11 January 2017 at the Sonofelice (Daemyung Resort),
                located in the Hongcheon-gun, Gangwon Province, Korea. This Winter School is an activity of A3 Foresight Program
                (Modeling and Computation of Applied Inverse Problems), hosted and supported by Korean A3 Foresight Program.
                This winter school in Imaging Science will include tutorial programs (in-depth tutorials, mini-courses, etc) as
                well as Group meetings (A3 meeting, Medical Imaging Group, Num. Anal.&amp; Sci.Comp Group, CFD Group, etc),
                aiming to provide insight into the various interfaces among mathematical theories, scientific computation,
                and the visualization of real-world problems for students and researchers.</p>
          </ul>
        </Row>
        <Row>
          <img className="img-responsive" src="/img/logo.jpg" alt="" />
        </Row>
      </section>
      <section className="organizer">
        <a name="Organizers" className="anchor"> </a>
        <Row>
          <h3 className="section-header">Organizers</h3>
        </Row>
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Affiliation</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jin Keun Seo</td>
                <td>Yonsei University, Korea</td>
                <td>seo@yonsei.ac.kr</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jong Chul Ye</td>
                <td>KAIST, Korea</td>
                <td>jong.ye@kaist.ac.kr</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Taeuk Jeong</td>
                <td>Yonsei University, Korea</td>
                <td>iamlogin@yonsei.ac.kr</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </section>
      <section className="speakers">
        <a name="Speakers" className="anchor"></a>
        <Row>
          <h3 className="section-header">Speakers</h3>
        </Row>
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Session</th>
                <th>Name</th>
                <th>Affiliation / Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CT (Image Processing / Deep learning / MAR)</td>
                <td>박형석</td>
                <td>NIMS</td>
              </tr>
              <tr>
                <td>Ultrasound (Segmentation / Deep learning)</td>
                <td>안치영 / 장재성</td>
                <td>NIMS / 연세대학교</td>
              </tr>
              <tr>
                <td>Electrical Impedance Tomography</td>
                <td>전기완 / 이경훈</td>
                <td>NIMS / 연세대학교</td>
              </tr>
              <tr>
                <td>Microwave Tomography</td>
                <td>박원광 / 손성호</td>
                <td>국민대 / ETRI</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>TBA</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </section>
      <section className="schedule">
        <a name="Schedule" className="anchor"></a>
        <Row>
          <h3 className="section-header">Schedule</h3>
        </Row>
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Speaker</th>
                <th>Title</th>
                <th>Plenary / Invited</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mon. 9 Jan.</td>
                <td>16:00-18:00</td>
                <td>Someone</td>
                <td>-</td>
                <td>Invited Speaker</td>
                <td>Granato(2F)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mon. 9 Jan.</td>
                <td>16:00-18:00</td>
                <td>Someone</td>
                <td>-</td>
                <td>Invited Speaker</td>
                <td>Rubino(3F)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mon. 9 Jan.</td>
                <td>16:00-18:00</td>
                <td>Someone</td>
                <td>A3 Meeting</td>
                <td>Invited Speaker</td>
                <td>Zaffiro(3F)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>-</td>
                <td>00:00-00:00</td>
                <td>전기완 (NIMS / 선임연구원)</td>
                <td>A Study for Mesh Generation using Partial Differential Equation</td>
                <td>Invited Speaker</td>
                <td>Zaffiro(3F)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>-</td>
                <td>00:00-00:00</td>
                <td>조정현 (KIST / 선임연구원)</td>
                <td>계산 기하학의 Forward/Inverse 문제와 응용</td>
                <td>Invited Speaker</td>
                <td>Zaffiro(3F)</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <ul>
            <li>The schedule may be changed depending on the circumstances.</li>
          </ul>
        </Row>
      </section>
      <section className="Registration">
        <a name="Registration" className="anchor"></a>
        <Row>
          <h3 className="section-header">Registration</h3>
        </Row>
        <Row>
          <h4> 등록 : 200,000 원 </h4>
          <p> Registration Fee includes : Dinner (Monday,Tuesday), Coffee and Snacks</p>
          <h5>등록 안내 - 10월 초 온라인 결제시스템 오픈</h5>
          <ul>
            <li>사전 등록 기간 : 2016년 11월 15일 까지</li>
            <li>추가 등록 기간 : 2016년 11월 16일 - 30일 까지</li>
            <li>사전에 온라인 등록 및 결제를 하여야 참여가능하며, 현장등록은 불가합니다.</li>
            <li><strong>결제 금액 환불 및 취소는 불가</strong>하므로 신중히 결제하여 주시기 바랍니다.</li>
            <li>Registration fee for foreign A3 participants will be exempted.</li>
          </ul>
        </Row>
        <Row>
          <span className="hidden">
            <h5>준비물</h5>
            <ul>
              <li>개인 노트북 지참 (딥러닝 실습용, 사용 소프트웨어 및 예제 미리설치 필요)</li>
              <li>Program Install Guideline (*맥북 사용 가능)</li>
              <li>사전 : 홈페이지 '실습파일 다운로드' 에서 파일 다운로드 가능 (*사전등록자에 한해 개별메일 안내)</li>
              <li>현장 : 해당 안내물 배포</li>
            </ul>
          </span>
        </Row>
        <Row>
          <h5><a href="https://goo.gl/forms/DdbIepxJOGShQ7j32------">온라인 등록 : Go to Online Registration</a></h5>
        </Row>
      </section>
      <section className="venue">
        <a name="Venue" className="anchor"></a>
        <Row>
          <h3 className="section-header">Venue</h3>
        </Row>
        <Row>
          <Col sm={12} md={4}>
              <h4> Zaffiro </h4>
              <p> Tower Center 3F (80석)</p>
              <img className="img-responsive" src="/img/zaffiro.jpg" alt="" />
          </Col>
          <Col sm={12} md={4}>
            <h4> Rubino </h4>
            <p> Tower Center 3F (13석) </p>
            <img className="img-responsive" src="/img/rubino.jpg" alt="" />
          </Col>
          <Col sm={12} md={4}>
            <h4> Granato </h4>
            <p> Tower Center 2F (60석)</p>
            <img className="img-responsive" src="/img/granato.jpg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="accommodation">
        <a name="Accommodation" className="anchor"></a>
        <Row>
          <h3 className="section-header">Accommodation</h3>
        </Row>
        <Row>
          <Col md={6}>
            <h4>대명리조트 쏘노펠리체</h4>
            <ul>
              <li> 노블리안 실버스위트 (1객실당 방2개, 거실1개) </li>
              <li>Daemyung Resort, Sonofelice, Noblian Sliver Suite (2 rooms &amp; 1 living room / 1Unit)</li>
            </ul>
            <p>숙박 및 콘도가격은 사무국으로 문의해주세요. (a3inverse@gmail.com)</p>
            <p>Homepage</p>
            <p><a href="https://www.daemyungresort.com/daemyung.front.foreign.main.main.ds/dmparse.dm">English</a></p>
            <p><a href="https://www.daemyungresort.com/daemyung.front.foreign.chn.main.main.ds/dmparse.dm">China</a></p>
            <p><a href="https://www.daemyungresort.com/daemyung.front.foreign.jpn.main.main.ds/dmparse.dm">Japan</a></p>
          </Col>
          <Col md={6}>
            <img className="img-responsive" src="/img/venue.jpg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="Transportation">
        <a name="Travel &amp; Transportation" className="anchor"></a>
        <Row>
          <h3 className="section-header">Travel &amp; Transportation</h3>
        </Row>
        <Row>
          <h4>Travel</h4>
          <p>Questions about the Visa Invitation Letter application process, e-mail: a3inverse@gmail.com - 추후공지</p>
        </Row>
        <Row>
          <h3>Transportation</h3>
          <p>How to get to Sonofelice (Daemyung Resort, Vivaldi Park)- 추후공지</p>
          <p><a href="http://www.daemyungresort.com/web/dm_english/html/01vivaldi_english_sub_10.html">English</a></p>
          <p><a href="http://www.daemyungresort.com/web/dm_china/html/01vivaldi_china_sub_10.html">China</a></p>
          <p><a href="http://www.daemyungresort.com/web/dm_japan/html/01vivaldi_japan_sub_10.html">Japan</a></p>
        </Row>
      </section>
    </Grid>
    );
  }	
}

