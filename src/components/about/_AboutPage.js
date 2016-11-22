import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

class AboutPage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <div>
              <h1>About</h1>
              <p>The Employee Directory is updated on a daily
                basis to reflect changes within Department of Technology.
                 If you are having troubles with the data or the search
                 functions of this application, please contact the Service Desk
                 at <a href="#" > (916) 464-4311 </a> to have a work order routed to Applications Support
                 --> Business Process Automation Sprt group.
              </p>

              <hr></hr>

              <h1>Disclaimer</h1>
              <p>
                The data displayed in this application comes from the PeopleSoft
                and Remedy applications and is not formatted or validated by the
                Employee Directory application itself. In order to correct the data
                format or content, please contact the Service Desk for the
                data corrections or open a work order ticket to
                Applications Support --> Business Process Automation Sprt group.
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
