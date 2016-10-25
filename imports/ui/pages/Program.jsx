import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Program = () => (
  <Grid>
    <section className="organizer">
      <a name="organizers" className="anchor"> </a>
      <Row><Col xs={12}>
        <h1 className="section-header">Organizers</h1>
      </Col></Row>
      <Row><Col xs={12}>
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
      </Col></Row>
    </section>
    <section className="speakers">
      <a name="speakers" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Speakers</h1>
      </Col></Row>
      <Row><Col xs={12}>
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
      </Col></Row>
    </section>
    <section className="schedule">
      <a name="schedule" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Schedule</h1>
      </Col></Row>
      <Row><Col xs={12}>
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
              <td>TBA</td>
              <td>-</td>
              <td>Invited Speaker</td>
              <td>Granato(2F)</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mon. 9 Jan.</td>
              <td>16:00-18:00</td>
              <td>TBA</td>
              <td>-</td>
              <td>Invited Speaker</td>
              <td>Rubino(3F)</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mon. 9 Jan.</td>
              <td>16:00-18:00</td>
              <td>TBA</td>
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
      </Col></Row>
      <Row><Col xs={12}>
        <ul>
          <li>The schedule may be changed depending on the circumstances.</li>
        </ul>
      </Col></Row>
    </section>

    <section className="venue">
      <a name="venue" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Venue</h1>
      </Col></Row>
      <Row>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Zaffiro </h2>
          <p> Tower Center 3F (80석)</p>
          <img className="img-responsive" src="/img/zaffiro.jpg" alt="" />
        </Col>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Rubino </h2>
          <p> Tower Center 3F (13석) </p>
          <img className="img-responsive" src="/img/rubino.jpg" alt="" />
        </Col>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Granato </h2>
          <p> Tower Center 2F (60석)</p>
          <img className="img-responsive" src="/img/granato.jpg" alt="" />
        </Col>
      </Row>
    </section>
    <section className="accommodation">
      <a name="accommodation" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Accommodation</h1>
      </Col></Row>
      <Row>
        <Col md={6}>
          <img className="img-responsive" src="/img/venue.jpg" alt="" />
        </Col>
        <Col md={6}>
          <h2 className="section-subheader">대명리조트 쏘노펠리체</h2>
          <ul>
            <li> 노블리안 실버스위트 (1객실당 방2개, 거실1개) </li>
            <li>Daemyung Resort, Sonofelice, Noblian Sliver Suite (2 rooms &amp; 1 living room / 1Unit)</li>
            <li>숙박 및 콘도가격은 사무국으로 문의해주세요. (a3inverse@gmail.com)</li>
          </ul>
          <h3 className="section-subsubheader">Homepage</h3>
          <ButtonToolbar>
            <Button href="https://www.daemyungresort.com">Korean</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.main.main.ds/dmparse.dm">English</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.chn.main.main.ds/dmparse.dm">China</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.jpn.main.main.ds/dmparse.dm">Japan</Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </section>
    <section className="Transportation">
      <a name="travel" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Travel &amp; Transportation</h1>
      </Col></Row>
      <Row><Col xs={12}>
        <h2 className="section-subheader">Travel</h2>
        <p>Questions about the Visa Invitation Letter application process, e-mail: a3inverse@gmail.com - 추후공지</p>
      </Col></Row>
      <Row><Col xs={12}>
        <h2 className="section-subheader">Transportation</h2>
        <p>How to get to Sonofelice (Daemyung Resort, Vivaldi Park)- 추후공지</p>
        <ButtonToolbar>
          <Button href="http://www.daemyungresort.com/daemyung.front.saupjang.yangpyung.resort_way_map.ds/dmparse.dm?menuNo=04">Korean</Button>
          <Button href="http://www.daemyungresort.com/web/dm_english/html/01vivaldi_english_sub_10.html">English</Button>
          <Button href="http://www.daemyungresort.com/web/dm_china/html/01vivaldi_china_sub_10.html">China</Button>
          <Button href="http://www.daemyungresort.com/web/dm_japan/html/01vivaldi_japan_sub_10.html">Japan</Button>
        </ButtonToolbar>
      </Col></Row>
    </section>
  </Grid>
)
