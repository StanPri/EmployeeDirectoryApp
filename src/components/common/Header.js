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

    //Do the Fetch call
    fetch('http://EDAPI/employees')
      .then(response => response.json())
      .then(json => {

        //Export file only after fetch call is done
        json = sortByKey(json, 'lastName');

        let fields = [
          "firstName", "lastName", "fullName", "group", "classification", "deskPhone", "email",
          "cellPhone", "faxNumber", "employeeNumber", "reportingUnit", "campus", "deskLocation",
          "mailStop", "manager"
        ];

        let csv = json2csv({data:json, fields: fields});

        let blob = new Blob([csv], {type: 'data:text/csv;charset=utf-8;'});
        if (navigator.msSaveBlob) {
          //Internet Explorer csv export
          navigator.msSaveBlob(blob, "EmployeeDirectory.csv");
        } else {
          //Non-Internet Explorer csv export
          let link = document.createElement("a");
          if (link.download !== undefined) {
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "EmployeeDirectory.csv");
            document.body.appendChild(link); //Required for Firefox browsers
            link.click();
            document.body.removeChild(link);
          }
        }


      });

  }

  render() {
    return (
      <Navbar fixedTop>
        <Row>
          <Col xs={1} lg={1}>
            <a href="http://www.ca.gov"><img src={ca_gov_logo}/></a>
          </Col>
          <Col xs={8} lg={5}>
            <Col lg={12}>
              <a href="http://www.cio.ca.gov">
                <img className="col-xs-2 cio-logo" src={cio_logo}/>
                <span className="cio-logo-text1 col-xs-10">California</span>
                <span className="cio-logo-text2 col-xs-10">Department of Technology</span>
              </a>
            </Col>
            <Col lg={12} className="header-title">
              <span>Employee Directory</span>
            </Col>
          </Col>
          <Col xs={3} lg={6} className="header-links">
            <Col lg={2} lgOffset={6}>
              <IndexLink to="/" activeClassName="active"><Button className="btn-outline">Search</Button></IndexLink>
            </Col>
            <Col lg={2}>
              <Button className="btn-outline" onClick={this.ConvertToExcelHandleClick}>Export</Button>
            </Col>
            <Col lg={2}>
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
