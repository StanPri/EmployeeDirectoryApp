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
              <p>This is Employee Directory!</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

AboutPage.propTypes = {};

export default AboutPage;
