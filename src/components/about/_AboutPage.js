import React, {PropTypes} from 'react';
import {
  Col,
  Grid,
  Row,
  ListGroup,
  ListGroupItem,
  Image
} from 'react-bootstrap';
const help_fig01 = require('../../images/help_fig01.png');
const help_fig02 = require('../../images/help_fig02.png');

class AboutPage extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h2>About</h2>
            <p>
              The Employee Directory application displays data located in PeopleSoft, Remedy, and Active Directory. This application is maintained by the Business Process Automation unit (BPAS), but the data is maintained by other units.
            </p>
            <p>
              If you are having trouble using this application, or want to know the process for correcting a data discrepency, please contact the Service Desk at 916-464-4311 and ask to have a work order routed to the Applications Support / Business Process Automation Sprt group.
            </p>
          </Col>
        </Row>
        <div className="add-padding"/>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h2>Help Using the Employee Directory</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h3>How to view an employee&rsquo;s information</h3>
            <ListGroup>
              <ListGroupItem header="Step 1">
                Start typing in the search box, and results will generate instantly.
              </ListGroupItem>
              <ListGroupItem header="Step 2">
                Select an employee to view their information.
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={12} md={8} mdOffset={2}>
            <Image className="help-fig center-block" src={help_fig01} alt="" responsive/>
          </Col>
        </Row>
        <div className="add-padding"/>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h3>Additional Features</h3>
            <ListGroup>
              <ListGroupItem header="Print">
                Select the print button in the upper righthand corner of the employee information.
              </ListGroupItem>
              <ListGroupItem header="Email">
                Select any email address to start a new email using your default email client.
              </ListGroupItem>
              <ListGroupItem header="Manager information">
                Select the manager link to view that employee's details.
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs={12} md={8} mdOffset={2}>
            <Image className="help-fig center-block" src={help_fig02} alt="" responsive/>
          </Col>
        </Row>
        <div className="add-padding"/>
      </Grid>
    );
  }
}

AboutPage.propTypes = {};

export default AboutPage;
