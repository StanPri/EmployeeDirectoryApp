import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

class AboutPage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={6} xs={12} smOffset={3}>
            <div className="col-xs-12 col-lg-10 col-lg-offset-1">
              <h2>About</h2>
              <p>
                 The Employee Directory application displays data located in PeopleSoft,
                 Remedy, and Active Directory. This application is maintained by the
                 <a href="http://ishare/team/BPAS/default.aspx"> Business Process
                 Automation unit (BPAS)</a>, but the data is maintained by other units.
              </p>
              <p>
                 If you are having trouble using this application, or want to know the
                 process for correcting a data discrepency, please contact the Service
                 Desk at 916-464-4311 and ask to have a work order routed to the
                 Applications Support / Business Process Automation Sprt group.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

AboutPage.propTypes = {};

export default AboutPage;
