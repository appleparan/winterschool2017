import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Program = () => (
  <Grid>
    <section className="organizer">
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
    <section className="special-session">
      <Row><Col xs={12}>
        <h1 className="section-header">Special Sessions</h1>
      </Col></Row>
      <Row><Col xs={12}>
        <Table responsive>
          <thead>
            <tr>
              <th>Session</th>
              <th>Organizer</th>
              <th>Affiliation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Current issues on X-ray computed tomography imaging</td>
              <td>Hyoung Suk Park, Jong Chul Ye</td>
              <td>NIMS, KAIST</td>
            </tr>
            <tr>
              <td>Understanding of Ultrasound Examinations and Applications of Deep Learning</td>
              <td>Chiyoung Ahn</td>
              <td>NIMS </td>
            </tr>
            <tr>
              <td>A tutorial on microwave imaging technique</td>
              <td>Won-Kwang Park</td>
              <td>Kookmin University</td>
            </tr>
            <tr>
              <td>국가수리과학연구소 내에서의 과제 소개</td>
              <td>Taeyoung Ha</td>
              <td>NIMS</td>
            </tr>
            <tr>
              <td>A3 Meeting</td>
              <td>Jin Keun Seo</td>
              <td>Yonsei University</td>
            </tr>
          </tbody>
        </Table>
      </Col></Row>
    <Row>
      <Col xs={12}>
        <h2 className="section-subheader">Session Poster</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <ul>
          <li><a href="/special/hsp.pdf">Session Poster : Current issues on X-ray computed tomography imaging</a></li>
          <li><a href="/special/cya.pdf">Session Poster : Understanding of Ultrasound Examinations and Applications of Deep Learning</a></li>
          <li><a href="/special/wkp.pdf">Session Poster : A tutorial on microwave imaging technique</a></li>
          <li><a href="/special/tyh.pdf">Session Poster : 국가수리과학연구소 내에서의 과제 소개</a></li>
        </ul>
      </Col>
    </Row>
    </section>
    <section className="speakers">
      <Row><Col xs={12}>
        <h1 className="section-header">Speakers</h1>
      </Col></Row>
      <p> Ordered by last name. </p>
      <Row><Col xs={12}>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Session</th>
              <th>Date</th>
              <th>Affiliation / Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yong Eun Chung</td>
              <td>CT</td>
              <td>1/10</td>
              <td>Dept. of Radiology, Yonsei University College of Medicine</td>
            </tr>
            <tr>
              <td>Jiashi Feng</td>
              <td>CT</td>
              <td>1/10</td>
              <td>Dept. of Electrical and Computer Engineering, National University of Singapore</td>
            </tr>
            <tr>
              <td>Yunkyoung Hyon</td>
              <td>NIMS</td>
              <td>1/9</td>
              <td>Division of Integrated Mathematics, NIMS</td>
            </tr>
            <tr>
              <td>Jae Sung Jang</td>
              <td>Ultrasound</td>
              <td>1/10</td>
              <td>Dept. of Computational Science and Engineering, Yonsei University</td>
            </tr>
            <tr>
              <td>Soonjeong Jo</td>
              <td>Ultrasound</td>
              <td>1/10</td>
              <td>ALPINION MEDICAL SYSTEMS Corporation</td>
            </tr>
            <tr>
              <td>Sol-Lip Kwon</td>
              <td>Microwave</td>
              <td>1/11</td>
              <td>Dept. of Electronics Engineering, Ewha Womans University</td>
            </tr>
            <tr>
              <td>Ho Kyung Kim</td>
              <td>CT</td>
              <td>1/10</td>
              <td>School of Mechanical Engineering, Pusan National University.</td>
            </tr>
            <tr>
              <td>Kyungsang Kim</td>
              <td>CT</td>
              <td>1/10</td>
              <td>Radiology Department, Harvard Medical School</td>
            </tr>
            <tr>
              <td>Hwa Pyung Kim</td>
              <td>Microwave</td>
              <td>1/11</td>
              <td>Dept. of Computational Science and Engineering, Yonsei University</td>
            </tr>
            <tr>
              <td>Kwang-Jae Lee</td>
              <td>Microwave</td>
              <td>1/11</td>
              <td>Radio Technology Research Department, Electronics and Telecommunications Research Institute (ETRI)</td>
            </tr>
            <tr>
              <td>Wanho Lee</td>
              <td>NIMS</td>
              <td>1/9</td>
              <td>Division of Integrated Mathematics, NIMS</td>
            </tr>
            <tr>
              <td>Hyoung Suk Park</td>
              <td>CT</td>
              <td>1/9</td>
              <td>Division of Integrated Mathematics, NIMS</td>
            </tr>
            <tr>
              <td>Won-Kwang Park</td>
              <td>Microwave</td>
              <td>1/11</td>
              <td>Dept. of Mathematics, Kookmin University</td>
            </tr>
            <tr>
              <td>Jin Keun Seo</td>
              <td>CT</td>
              <td>1/9</td>
              <td>Dept. of Computational Science and Engineering, Yonsei University</td>
            </tr>
            <tr>
              <td>Seong-Ho Son</td>
              <td>Microwave</td>
              <td>1/11</td>
              <td>Radio Technology Research Department, Electronics and Telecommunications Research Institute (ETRI)</td>
            </tr>
            <tr>
              <td>HanByul Yang</td>
              <td>Ultrasound</td>
              <td>1/10</td>
              <td>NVIDIA Corporation</td>
            </tr>
            <tr>
              <td>Jung Chul Ye</td>
              <td>CT</td>
              <td>1/10</td>
              <td>Dept. of Bio and Brain Engineering, KAIST</td>
            </tr>
          </tbody>
        </Table>
      </Col></Row>
    </section>
  </Grid>
)
