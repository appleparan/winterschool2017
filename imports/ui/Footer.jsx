import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class FooterInstance extends Component {
  render() {
    return (
      <Grid>
        <footer>
          <a name="Contact" className="anchor"></a>
          <Row>
            <p>&copy; Haeeun Han 2016</p>
            <address>
              <strong>MEDVIEWSOFT</strong><br />
              50 Yonsei-ro, Seodaemun-gu<br />
              Seoul, Korea 03722<br />
              <abbr title="Phone">P:</abbr> (82)2 2123-6121
            </address>

            <address>
              <strong>Haeeun Han</strong>  Event manager<br />
              <a href="mailto:#">csedept@yonsei.ac.kr</a>
            </address>
          </Row>
        </footer>
      </Grid>
    );
  }	
}

