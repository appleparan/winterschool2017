import React, { Component } from 'react';
import { render } from 'react-dom';

import { Grid, Row, Col } from 'react-bootstrap';

// export class FooterLayout extends Component {
export const FooterLayout = () => (

  <Grid>
    <a name="Contact" className="anchor"></a>
    <Row>
      <Col xs={12} sm={6}>
        <p> <strong>Event manager</strong> </p>
        <p>
          Haeeun Han <br />
          <i className="fa fa-phone" aria-hidden="true"></i> (82) 2 2123-6121 <br />
          <i className="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:csedept@yonsei.ac.kr"> csedept@yonsei.ac.kr</a>
        </p>
      </Col>

      <Col xs={12} sm={6}>
        <p>&copy; Haeeun Han 2016</p>
        <address>
          <strong>MEDVIEWSOFT</strong><br />
          50 Yonsei-ro, Seodaemun-gu<br />
          Seoul, Korea, 03722<br />
          <i className="fa fa-link" aria-hidden="true"></i> <a href="http://mediviewsoft.com/"> homepage </a> <br />
          <i className="fa fa-phone" aria-hidden="true"></i> (82) 2 2123-6121 <br />
          <i className="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:csedept@yonsei.ac.kr"> csedept@yonsei.ac.kr</a>
        </address>
      </Col>
    </Row>
  </Grid>
)
