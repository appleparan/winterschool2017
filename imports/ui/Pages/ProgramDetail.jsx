import React, { Component } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export class ProgramCT extends Component {
  render() {
    return (
      <Grid>
        <section className="">
          <h2 className="section-subheader">Main Topic: Current issues on X-ray computed tomography imaging</h2>
          <p>

            This program in the winter school is intended to give graduate students and young researchers the opportunity to get an insight into the current issues on X-ray computed tomography imaging such as low-dose CT, metal artifacts, photon counting CT and so on. This program will consist of two parts: research lectures and tutorials using MATLAB. The speakers are well-known researchers working in the field of medical imaging.
          </p>

          <h3 className="section-subsubheader">Tutorials</h3>
          <ul>
            <li>Sparse sensing: Fundamentals and applications in X-ray CT</li>
            <li>A tutorial on Deep Learning : CNN</li>
          </ul>
          <h3 className="section-subsubheader">Keynote Speaker​</h3>
          <ul>
            <li>Jiashi Feng  (National University of Singapore) : Deep learning</li>
          </ul>
          <h3 className="section-subsubheader">List of Speakers</h3>
          <ul>
            <li>Jung Chul Ye (KAIST)</li>
            <li>Ho Kyung Kim (Pusan National University)</li>
            <li>Yong Eun Chung (Yonsei University)</li>
            <li>Kyungsang Kim (Harvard Medical School)</li>
            <li>Jin Keun Seo (Yonsei University)</li>
            <li>Hyoung Suk Park (NIMS)</li>
          </ul>
          <h3 className="section-subsubheader">Session Organizer</h3>
          <ul>
            <li>Hyoung Suk Park (NIMS)</li>
            <li>Jung Chul Ye (KAIST)</li>
          </ul>
          <h3 className="section-subsubheader">준비물</h3>
          <ul>
            <li>MATLAB이 설치된 노트북을 개인적으로 지참</li>
          </ul>
          <h3 className="section-subsubheader">Schedule</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
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
                <td>1/9 (Mon.)</td>
                <td>18:30-19:30</td>
                <td>CT</td>
                <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  I</td>
                <td>Hyoung Suk Park</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/9 (Mon.)</td>
                <td>19:30-20:30</td>
                <td>CT</td>
                <td>Tutorial 2: A tutorial on Deep Learning: CNN  I</td>
                <td>Jin Keun Seo</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>08:30-09:20</td>
                <td>CT</td>
                <td>Keynote Talk: Deep learning</td>
                <td>Jiashi Feng</td>
                <td>Zaffiro</td>
                <td>EN</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>09:40-10:00</td>
                <td>CT</td>
                <td>Wavelet domain deep learning approach for low-dose CT reconstruction</td>
                <td>Jung Chul Ye</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>10:00-10:20</td>
                <td>CT</td>
                <td>Discussions on x-ray tomography using sandwich detectors</td>
                <td>Ho Kyung Kim</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>10:20-10:40</td>
                <td>CT</td>
                <td>Double dose reduction in CT</td>
                <td>Yong Eun Chung</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>18:30-19:30</td>
                <td>CT</td>
                <td>Tutorial 1: Sparse sensing: Fundamentals and applications in X-ray CT  II </td>
                <td>Kyungsang Kim</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>19:30-20:30</td>
                <td>CT</td>
                <td>Tutorial 2: A tutorial on Deep Learning: CNN II </td>
                <td>Jin Keun Seo</td>
                <td>Zaffiro</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Button bsStyle="primary" href="/sessions/ct/winterschool-ct.pdf"> Poster </Button>
        </section>
      </Grid>
    )
  }
}

export class ProgramUltraSound extends Component {
  render() {
    return (
      <Grid>
        <section className="">
          <h2 className="section-subheader">Topic: Understanding of Ultrasound Examinations and Applications of Deep Learning</h2>
          <p>
          </p>

          <h3 className="section-subsubheader">Tutorials</h3>
          <ul>
            <li>심장 및 산부인과 초음파 진단의 임상적 이해</li>
            <li>Deep learning을 이용한 심장기능 및 태아 진단을 하기 위한 방법</li>
          </ul>
          <h3 className="section-subsubheader">List of Speakers</h3>
          <ul>
            <li>Soonjeong Jo (ALPINION MEDICAL SYSTEMS Corporation)</li>
            <li>HanByul Yang (NVIDIA Corporation)</li>
            <li>Yoongu Hwang (Yonsei University)</li>
            <li>Jaeseong Jang (Yonsei University)</li>
          </ul>
          <h3 className="section-subsubheader">Session Organizer</h3>
          <ul>
            <li>Chiyoung Ahn  (NIMS)</li>
          </ul>
          <h3 className="section-subsubheader">준비물</h3>
          <ul>
            <li>TensorFlow가 설치된 노트북을 개인적으로 지참</li>
            <li><a href="https://www.tensorflow.org/get_started/os_setup">How to install TensorFlow</a></li>
          </ul>
          <h3 className="section-subsubheader">Schedule</h3>
            <Table responsive>
              <thead>
                <tr>
                  <th>Date</th>
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
                <td>1/10 (Tue.)</td>
                <td>13:30-14:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 1: 심장 및 산부인과 초음파 진단의 임상적 이해</td>
                <td>Soonjeong Jo</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>14:30-15:20</td>
                <td>Ultrasound</td>
                <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼</td>
                <td>HanByul Yang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>15:30-16:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 2: Tensorflow를 사용한 딥러닝 튜토리얼 (심장영상에 응용) </td>
                <td>HanByul Yang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>16:30-17:30</td>
                <td>Ultrasound</td>
                <td>Tutorial 3: CNN-based automatic measurement of fetal biometry </td>
                <td>Jaeseong Jang</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Button bsStyle="primary" href="/sessions/ultrasound/winterschool-ultrasound.pdf"> Poster </Button>
        </section>
      </Grid>
    )
  }
}

export class ProgramMicrowave extends Component {
  render() {
    return (
      <Grid>
        <section className="">
          <h2 className="section-subheader">Topic: Microwave Tomography - A tutorial on microwave imaging technique</h2>
          <p>
            The program concerns both the mathematical and engineering concept of microwave imaging technique. This program deals with breast cancer detection, static/differential tomography, hardware and experiments, application of MUltiple SIgnal Classification (MUSIC) algorithm, and inversion technique Distinguished expert speakers will give some insights and current issues in microwave imaging.
          </p>

          <h3 className="section-subsubheader">Tutorials</h3>
          <ul>
            <li>Application to the breast cancer detection</li>
            <li>Static/Differential Microwave Tomography</li>
            <li>Hardware and Experiments of Microwave Imaging</li>
            <li>Inversion method: mathematical theory and application</li>
          </ul>
          <h3 className="section-subsubheader">List of Speakers</h3>
          <ul>
            <li>Sol-Lip Kwon (Ewha Womans University)</li>
            <li>Hwa Pyung Kim (Yonsei University)</li>
            <li>Seong-Ho Son (ETRI)</li>
            <li>Kwang-Jae Lee  (ETRI)</li>
            <li>Won-Kwang Park (Kookmin University)</li>
          </ul>
          <h3 className="section-subsubheader">Session Organizer</h3>
          <ul>
            <li>박원광 (국민대)</li>
          </ul>
          <h3 className="section-subsubheader">Schedule</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
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
                <td>1/11 (Wed.)</td>
                <td>09:00-09:30</td>
                <td>Microwave</td>
                <td>Talk 1: Time-Domain Microwave Imaging for Breast Cancer Detection</td>
                <td>Sol-Lip Kwon</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/11 (Wed.)</td>
                <td>09:30-10:00</td>
                <td>Microwave</td>
                <td>Talk 2: An Introduction to Microwave Imaging – Having Continuous First and Second Derivatives</td>
                <td>Hwa Pyung Kim</td>
                <td>Granato </td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/11 (Wed.)</td>
                <td>10:00-10:30</td>
                <td>Microwave</td>
                <td>Talk 3: Basics of Static / Differential Microwave Tomography</td>
                <td>Seong-Ho Son</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/11 (Wed.)</td>
                <td>10:30-11:00</td>
                <td>Microwave</td>
                <td>Talk 4: Hardware and Experiments of Microwave Tomographic Imaging</td>
                <td>Kwang-Jae Lee</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/11 (Wed.)</td>
                <td>11:00-11:30</td>
                <td>Microwave</td>
                <td>Talk 5: MUSIC Algorithm for Small Anomaly Detection in Microwave Imaging</td>
                <td>Won-Kwang Park</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Button bsStyle="primary" href="/sessions/microwave/winterschool-microwave.pdf"> Poster </Button>
        </section>
      </Grid>
    )
  }
}

export class ProgramNIMS extends Component {
  /*
  1. 데이터분석은 사회, 문화, 과학, 정보통신 등 거의 모든 분야에서 새로운 가치를 찾고 많은 현상들을 분석/해석하기 위한 중요한 역할을 하고 있습니다. 국가수리과학연구소에서는 이와 관련하여 "빅데이터 분석모델 개발과 응용"연구과제를 진행하고 있으며,  데이터 분석방법론에 핵심역할을 할 수 있는 수리과학기반의 데이터 분석기법을 연구개발하고 있습니다. 본 발표에서는 데이터분석방법론을 수리과학 관점에서 설명하고 활용을 소개합니다.

  2. 혈류 순환이나 세포 이동 등 인체 내에서 일어나는 복잡하고 다양한 현상을 이해하고 진단 및 치료에 활용하기 위해 수학적 모델이 급격하게 대두되고 있습니다. 이에 연구소에서 진행하고 있는 인체 내 생명현상과 관련된 수학적모델링 연구결과를 소개하고 활용방안에 대해 토의합니다.
  */
  render() {
    return (
      <Grid>
        <section className="">
          <h2 className="section-subheader">Topic: 국가수리과학연구소 내에서의 과제 소개 </h2>
          <p>
            국가수리과학연구소는 산업경쟁력 관점에서 시급하고 수학의 역할이 중요한 전략분야의 핵심기술을 확보하여 수리과학 전문성 강화 및 대외 경쟁력 확보를 위해 3개의 전략분야로 데이터 분석, 암호 그리고 생명현상에 대한 연구 등을 선정하여 연구하고 있읍니다. 이번 강의는 3가지 중 데이터 분석에 관한 연구 내용과 혈류 순환계에 대한 소개 및 연구성과를 설명드리고자 합니다.
          </p>
          <h3 className="section-subsubheader">Tutorials</h3>
          <ul>
            <li>Mathematical Data Analytics and Its Applications </li>
            <li>Study on the human biological phenomena </li>
          </ul>
          <h3 className="section-subsubheader">List of Speakers</h3>
          <ul>
            <li>현윤영 (NIMS)</li>
            <li>이완호 (NIMS)</li>
          </ul>
          <h3 className="section-subsubheader">Session Organizer</h3>
          <ul>
            <li>하태영  (NIMS)</li>
          </ul>
          <h3 className="section-subsubheader">Schedule</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
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
                <td>1/9 (Mon.)</td>
                <td>14:00-16:00</td>
                <td>NIMS</td>
                <td>Talk 1: Mathematical Data Analytics and Its Applications</td>
                <td>Yunkyoung Hyon</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/9 (Mon.)</td>
                <td>16:00-17:00</td>
                <td>NIMS</td>
                <td>Talk 2: Study on the Human Biological Phenomena</td>
                <td>Wanho Lee</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Button bsStyle="primary" href="/sessions/nims/winterschool-nims.pdf"> Poster </Button>
        </section>
      </Grid>
    )
  }
}


export class ProgramImaging extends Component {
  render() {
    return (
      <Grid>
        <section className="">
          <h2 className="section-subheader">Topic: Computational Mathematics and Imaging</h2>
          <p>
          </p>
          <h3 className="section-subsubheader">Tutorials</h3>
          <ul>
            <li></li>
          </ul>
          <h3 className="section-subsubheader">List of Speakers</h3>
          <ul>
            <li>Kiwan Jeon (NIMS)</li>
            <li>Junghyun Cho (KIST)</li>
          </ul>
          <h3 className="section-subsubheader">Session Organizer</h3>
          <ul>
            <li>Chang-Ock Lee  (KAIST)</li>
          </ul>
          <h3 className="section-subsubheader">Schedule</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
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
                <td>1/9 (Mon.)</td>
                <td>09:00-09:30</td>
                <td>Imaging</td>
                <td>A study for Mesh Generation using Partial Differential Equation</td>
                <td>Kiwan Jeon</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
              <tr>
                <td>1/10 (Tue.)</td>
                <td>09:00-09:50</td>
                <td>Imaging</td>
                <td>계산 기하학의 Forward/Inverse 문제와 응용</td>
                <td>Junghun Cho</td>
                <td>Granato</td>
                <td>KR</td>
              </tr>
            </tbody>
          </Table>
          <Button bsStyle="primary" href="/sessions/imaging/winterschool-imaging.pdf"> Poster </Button>
        </section>
      </Grid>
    )
  }
}
