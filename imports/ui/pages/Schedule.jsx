import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Schedule = () => (
  <Grid>
    <section className="schedule">
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
  </Grid>
)
