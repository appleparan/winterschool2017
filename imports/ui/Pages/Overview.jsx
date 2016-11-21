import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Overview = () => (
  <div>
    <section className='hero hidden-xs hidden-sm'>
      <div className='hero-img'> </div>
    </section>
    <Grid>
      <section className="overview">
        <Row><Col xs={12}>
          <h1 className="section-header">Overview</h1>
        </Col></Row>
        <Row><Col xs={12}>
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
        </Col></Row>
        <Row>
          <Col xs={12}>
            <h2 className="section-subheader"><a href="/official-docs/winterschool2017_poster.pdf">Poster</a></h2>
          </Col>
        </Row>
        <Row><Col xs={12}>
          <img className="img-responsive" src="/img/logo.jpg" alt="" />
        </Col></Row>
      </section>
    </Grid>
  </div>
)
