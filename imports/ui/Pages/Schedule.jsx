import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Schedule = () => (
  <Grid>
    <section className="schedule">
      <Row><Col xs={12}>
        <h1 className="section-header">CT Session</h1>
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
              <td>18:30-19:30</td>
              <td>Hyoung Suk Park</td>
              <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  I</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mon. 9 Jan.</td>
              <td>19:30-20:30</td>
              <td>Jin Keun Seo</td>
              <td>Tutorial 2: A tutorial on Deep Learning: CNN  I</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tue. 10 Jan.</td>
              <td>08:30-09:20</td>
              <td>Jiashi Feng</td>
              <td>Keynote Talk: Deep learning</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tue. 10 Jan.</td>
              <td>09:40-10:00</td>
              <td>Jung Chul Ye</td>
              <td>CT Talk 1</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Tue. 10 Jan.</td>
              <td>10:00-10:20</td>
              <td>Ho Kyung Kim</td>
              <td>CT Talk 2</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Tue. 10 Jan.</td>
              <td>10:20-10:40</td>
              <td>Yong Eun Chung</td>
              <td>CT Talk 3</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Tue. 10 Jan.</td>
              <td>18:30-19:30</td>
              <td>Yong Eun Chung</td>
              <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  II </td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Tue. 10 Jan.</td>
              <td>19:30-20:30</td>
              <td>Jin Keun Seo</td>
              <td>Tutorial 2: A tutorial on Deep Learning: CNN II </td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
          </tbody>
        </Table>
      </Col></Row>
      <Row><Col xs={12}>
        <h1 className="section-header">NIMS Session</h1>
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
              <td>14:00-16:00</td>
              <td>현윤경</td>
              <td>Talk 1: Mathematical Data Analytics and Its Applications</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mon. 9 Jan.</td>
              <td>16:00-17:00</td>
              <td>이완호</td>
              <td>Talk 2: Study on the Human Biological Phenomena</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
          </tbody>
        </Table>
      </Col></Row>
      <Row><Col xs={12}>
        <h1 className="section-header">Ultrasound(초음파) session schedule.</h1>
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
              <td>Tue. 10 Jan.</td>
              <td>13:30-14:30</td>
              <td>조순정</td>
              <td>Tutorial 1: 심장 및 산부인과 초음파 진단의 임상적 이해</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tue. 10 Jan.</td>
              <td>14:30-15:20</td>
              <td>양한별</td>
              <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tue. 10 Jan.</td>
              <td>15:30-16:30</td>
              <td>양한별</td>
              <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼 (심장영상에 응용) </td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tue. 10 Jan.</td>
              <td>16:30-17:30</td>
              <td>장재성</td>
              <td>Tutorial 3: CNN-based automatic measurement of fetal biometry </td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
          </tbody>
        </Table>
      </Col></Row>
      <Row><Col xs={12}>
        <h1 className="section-header">Microwave session schedule.</h1>
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
              <td>Wed. 11 Jan.</td>
              <td>09:00-09:30</td>
              <td>권솔립</td>
              <td>Talk 1: Time-Domain Microwave Imaging for Breast Cancer Detection</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Wed. 11 Jan.</td>
              <td>09:30-10:00</td>
              <td>김화평</td>
              <td>Talk 2: An Introduction to Microwave Imaging – Having Continuous First and Second Derivatives</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Wed. 11 Jan.</td>
              <td>10:00-10:30</td>
              <td>손성호</td>
              <td>Talk 3: Basics of Static / Differential Microwave Tomography</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Wed. 11 Jan.</td>
              <td>10:30-11:00</td>
              <td>이광재</td>
              <td>Talk 4: Hardware and Experiments of Microwave Tomographic Imaging</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Wed. 11 Jan.</td>
              <td>11:00-11:30</td>
              <td>박원광</td>
              <td>Talk 5: MUSIC Algorithm for Small Anomaly Detection in Microwave Imaging</td>
              <td>Invited Speaker</td>
              <td>TBA</td>
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
  </Grid>
)
