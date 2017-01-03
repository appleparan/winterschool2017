import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PDF from 'react-pdf-js';

export class Schedule extends Component {
  constructor(props) {
    super(props);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.state = {
      page: 1,
      pages: undefined
    };
  }

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }


  renderPagination(page, pages) {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><FontAwesome name="arrow-left" /> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><FontAwesome name="arrow-left" /> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <FontAwesome name="arrow-right" /></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <FontAwesome name="arrow-right" /></a></li>;
    }
    return (
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      );
  }

  render() {
    const LegacySchedule = (
      <Grid>
        <section className="schedule">
          <Row><Col xs={12}>
            <h1 className="section-header">Monday January 9</h1>
          </Col></Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Title</th>
                <th>Speaker</th>
                <th>Room</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00-09:30</td>
                <td>Imaging</td>
                <td>A study for Mesh Generation using Partial Differential Equation</td>
                <td>Kiwan Jeon</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>14:00-16:00</td>
                <td>NIMS</td>
                <td>Talk 1: Mathematical Data Analytics and Its Applications</td>
                <td>Yunkyoung Hyon</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>16:00-17:00</td>
                <td>NIMS</td>
                <td>Talk 2: Study on the Human Biological Phenomena</td>
                <td>Wanho Lee</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>18:30-19:30</td>
                <td>CT</td>
                <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  I</td>
                <td>Hyoung Suk Park</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>19:30-20:30</td>
                <td>CT</td>
                <td>Tutorial 2: A tutorial on Deep Learning: CNN  I</td>
                <td>Jin Keun Seo</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Row><Col xs={12}>
            <h1 className="section-header">Tuesday January 10</h1>
          </Col></Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Title</th>
                <th>Speaker</th>
                <th>Room</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30-09:20</td>
                <td>CT</td>
                <td>Keynote Talk: Deep learning</td>
                <td>Jiashi Feng</td>
                <td>Zaffiro</td>
                <td>EN</td>
              </tr>
              <tr>
                <td>09:00-09:50</td>
                <td>Imaging</td>
                <td>계산 기하학의 Forward/Inverse 문제와 응용</td>
                <td>Junghun Cho</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>09:40-10:00</td>
                <td>CT</td>
                <td>CT Talk 1</td>
                <td>Jung Chul Ye</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>10:00-10:20</td>
                <td>CT</td>
                <td>CT Talk 2</td>
                <td>Ho Kyung Kim</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>10:20-10:40</td>
                <td>CT</td>
                <td>CT Talk 3</td>
                <td>Yong Eun Chung</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>13:30-14:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 1: 심장 및 산부인과 초음파 진단의 임상적 이해</td>
                <td>Soonjeong Jo</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>14:30-15:20</td>
                <td>Ultrasound</td>
                <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼</td>
                <td>HanByul Yang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>15:30-16:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼 (심장영상에 응용) </td>
                <td>HanByul Yang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>16:30-17:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 3: CNN-based automatic measurement of fetal biometry </td>
                <td>Jaeseong Jang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>18:30-19:30</td>
                <td>CT</td>
                <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  II </td>
                <td>Kyungsang Kim</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>19:30-20:30</td>
                <td>CT</td>
                <td>Tutorial 2: A tutorial on Deep Learning: CNN II </td>
                <td>Jin Keun Seo</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Row><Col xs={12}>
            <h1 className="section-header">Wednesday January 11</h1>
          </Col></Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
                <th>Title</th>
                <th>Speaker</th>
                <th>Room</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00-09:30</td>
                <td>Microwave</td>
                <td>Talk 1: Time-Domain Microwave Imaging for Breast Cancer Detection</td>
                <td>Sol-Lip Kwon</td>
                <td>Rubino</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>09:30-10:00</td>
                <td>Microwave</td>
                <td>Talk 2: An Introduction to Microwave Imaging – Having Continuous First and Second Derivatives</td>
                <td>Hwa Pyung Kim</td>
                <td>Rubino</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>10:00-10:30</td>
                <td>Microwave</td>
                <td>Talk 3: Basics of Static / Differential Microwave Tomography</td>
                <td>Seong-Ho Son</td>
                <td>Rubino</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>10:30-11:00</td>
                <td>Microwave</td>
                <td>Talk 4: Hardware and Experiments of Microwave Tomographic Imaging</td>
                <td>Kwang-Jae Lee</td>
                <td>Rubino</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>11:00-11:30</td>
                <td>Microwave</td>
                <td>Talk 5: MUSIC Algorithm for Small Anomaly Detection in Microwave Imaging</td>
                <td>Won-Kwang Park</td>
                <td>Rubino</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Row><Col xs={12}>
            <ul>
              <li>The schedule may be changed depending on the circumstances.</li>
            </ul>
          </Col></Row>
        </section>
      </Grid>
    );

    return (
      <div>
        <section className="pdf-section">
          <Row><Col xsOffset={3} smOffset={5}>
            <Button bsSize="large" href="/schedule/2017-a3-schedule.pdf"> Download PDF Manually </Button>
          </Col></Row>
        </section>
      </div>
    )
  }
}
