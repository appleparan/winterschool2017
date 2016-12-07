import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const Overview = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          <section className="overview-poster">
            <Row>
              <picture>
                <source
                  media="(max-width: 767px)"
                  sizes="(max-width: 1534px) 100vw, 1534px"
                  srcSet="
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_190.png 190w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_328.png 328w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_443.png 443w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_545.png 545w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_627.png 627w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_721.png 721w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_805.png 805w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_884.png 884w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_958.png 958w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1031.png 1031w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1105.png 1105w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1169.png 1169w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1240.png 1240w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1313.png 1313w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_1_1,c_fill,g_auto__c_scale,w_1534.png 1534w"
                />
                <source
                  media="(min-width: 768px) and (max-width: 991px)"
                  sizes="(max-width: 1983px) 70vw, 1388px"
                  srcSet="
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_538.png 538w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_659.png 659w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_765.png 765w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_876.png 876w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_968.png 968w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_1067.png 1067w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_1158.png 1158w,
                  /img/official-poster/winterschool2017_poster_fr8gkr_ar_4_3,c_fill,g_auto__c_scale,w_1388.png 1388w"
                />
                <source
                  media="(min-width: 992px) and (max-width: 1199px)"
                  sizes="(max-width: 2400px) 60vw, 1440px"
                  srcSet="
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_16_9,c_fill,g_auto__c_scale,w_596.png 596w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_16_9,c_fill,g_auto__c_scale,w_782.png 782w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_16_9,c_fill,g_auto__c_scale,w_945.png 945w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_16_9,c_fill,g_auto__c_scale,w_1096.png 1096w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_ar_16_9,c_fill,g_auto__c_scale,w_1440.png 1440w"
                />
                <img className="img-responsive"
                  sizes="(max-width: 8768px) 40vw, 3507px"
                  srcSet="
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_480.png 480w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_609.png 609w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_728.png 728w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_829.png 829w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_935.png 935w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1043.png 1043w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1142.png 1142w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1233.png 1233w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1325.png 1325w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1422.png 1422w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1511.png 1511w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1592.png 1592w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1680.png 1680w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1772.png 1772w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1850.png 1850w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_1931.png 1931w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2009.png 2009w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2090.png 2090w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2158.png 2158w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2235.png 2235w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2315.png 2315w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_2388.png 2388w,
                    /img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_3507.png 3507w"
                  src="/img/official-poster/winterschool2017_poster_fr8gkr_c_scale,w_3507.png"
                  alt="Offical Poster"
                />
              </picture>
            </Row>
          </section>
        </Col>
        <Col xs={12} sm={6}>
          <section className="overview">
            <Row>
              <h1 className="section-header">Overview</h1>
            </Row>
            <Row>
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
              <h2 className="section-subheader"><a href="/official-docs/winterschool2017_poster.pdf">Poster (PDF)</a></h2>
            </Row>
            <Row>
              <img className="img-responsive" src="/img/logo.jpg" alt="" />
            </Row>
          </section>
        </Col>
      </Row>

    </Grid>
  </div>
)
