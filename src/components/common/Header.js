import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Row, Col, Button} from 'react-bootstrap';
import json2csv from 'json2csv';
const ca_gov_logo = require('../../images/ca_gov_logo.png');
const cio_logo = require('../../images/cio_logo.png');

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      employeeData: []
    };
    this.ConvertToExcelHandleClick = this.ConvertToExcelHandleClick.bind(this);
  }

  ConvertToExcelHandleClick() {
    fetch('http://EDAPI/employees')
      .then(response => response.json())
      .then(json => {
        json = sortByKey(json, 'lastName');
        this.setState({ employees: json });
      });
    let fields = [
      "firstName", "lastName", "fullName", "group", "classification", "deskPhone", "email",
      "cellPhone", "faxNumber", "employeeNumber", "reportingUnit", "campus", "deskLocation",
      "mailStop", "manager"
    ];
    let csv = json2csv({data:this.state.employeeData, fields: fields});
    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    let encodedUri = encodeURI(csv);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "EmployeeDirectory.csv");
    link.click();
  }

  render() {
    return (
      <Navbar fixedTop>
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
              <IndexLink to="/" activeClassName="active"><Button className="btn-outline">Search</Button></IndexLink>
            </Col>
            <Col xs={2}>
              <Button className="btn-outline" onClick={this.ConvertToExcelHandleClick}>Export</Button>
            </Col>
            <Col xs={2}>
              <Link to="/about" activeClassName="active"><Button className="btn-outline">About</Button></Link>
            </Col>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

export default Header;
