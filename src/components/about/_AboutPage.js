import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

class AboutPage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={8} xsOffset={2} lg={6} lgOffset={3}>
            <div>
              <h2>About</h2>
              <p>
                 The Employee Directory application displays data located in PeopleSoft,
                 Remedy, and Active Directory. This application is maintained by the
                 Business Process Automation unit (BPAS), but the data is maintained
                 by other units.
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
