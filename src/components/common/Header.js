import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Row, Col, Button} from 'react-bootstrap';
const ca_gov_logo = require('../../images/ca_gov_logo.png');
const cio_logo = require('../../images/cio_logo.png');

const Header = () => {
  return (
    <Navbar staticTop>
      <Row>
        <Col xs={1}>
          <a href="http://www.ca.gov"><img src={ca_gov_logo}/></a>
        </Col>
        <Col xs={5}>
          <Col xs={12}>
            <a href="http://www.cio.ca.gov">
              <img className="col-xs-2 cio-logo" src={cio_logo}/>
              <span className="cio-logo-text1 col-xs-10">California</span>
              <span className="cio-logo-text2 col-xs-10">Department of Technology</span>
            </a>
          </Col>
          <Col xs={12} className="header-title">
            <span>Employee Directory</span>
          </Col>
        </Col>
        <Col xs={6} className="header-links">
          <Col xs={2} xsOffset={6}>
            <IndexLink to="/" activeClassName="active"><Button className="btn-outline">Home</Button></IndexLink>
          </Col>
          <Col xs={2}>
            <Link to="/about" activeClassName="active"><Button className="btn-outline">About</Button></Link>
          </Col>
          <Col xs={2}>
            <Link to="/employee" activeClassName="active"><Button className="btn-outline">Employee</Button></Link>
          </Col>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
