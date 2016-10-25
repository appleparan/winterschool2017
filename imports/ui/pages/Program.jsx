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
      </Grid>
)
