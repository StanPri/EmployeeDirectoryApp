import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Button} from 'react-bootstrap';
import json2csv from 'json2csv';
const ca_gov_logo = require('../../images/ca_gov_logo.png');
const cio_logo = require('../../images/cio_logo.png');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: []
    };
    this.ConvertToExcelHandleClick = this.ConvertToExcelHandleClick.bind(this);
  }

  ConvertToExcelHandleClick(e) {
    //Do the Fetch call
    fetch('http://EDAPI/employees').then(response => response.json()).then(json => {
      //Export file only after fetch call is done
      json = sortByKey(json, 'lastName');
      let fields = [
        "firstName",
        "lastName",
        "fullName",
        "group",
        "classification",
        "deskPhone",
        "email",
        "cellPhone",
        "faxNumber",
        "employeeNumber",
        "reportingUnit",
        "campus",
        "deskLocation",
        "mailStop",
        "manager"
      ];
      let csv = json2csv({data: json, fields: fields});
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
      <Navbar fixedTop fluid>
        <input type="checkbox" id="navbar-toggle-cbox" className="hidden"/>
        <div className="navbar-header">
          <label htmlFor="navbar-toggle-cbox" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={toggleMenuOnClick}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </label>
          <a href="http://www.ca.gov"><img className="header-ca-logo" src={ca_gov_logo}/></a>
          <a href="http://www.cio.ca.gov" className="header-cio-logo"><img src={cio_logo}/></a>
          <h1 className="header-title">Employee Directory</h1>
        </div>
        <div className="navbar-collapse collapse hidden" id="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li onClick={toggleMenuOnClick}>
              <IndexLink to="/" activeClassName="active">
                <Button className="btn-outline">Search</Button>
              </IndexLink>
            </li>
            <li onClick={toggleMenuOnClick}>
              <a href="#">
                <Button className="btn-outline" onClick={this.ConvertToExcelHandleClick}>Export</Button>
              </a>
            </li>
            <li onClick={toggleMenuOnClick}>
              <Link to="/about" activeClassName="active">
                <Button className="btn-outline">About</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div id="navbar-overlay" className="hidden" onClick={toggleMenuOnClick}/>
      </Navbar>
    );
  }
}

function toggleMenuOnClick(e) {
  document.getElementById('navbar-overlay').classList.toggle('hidden');
  document.getElementById('navbar').classList.toggle('hidden');
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    let x = a[key];
    let y = b[key];
    return ((x < y)
      ? -1
      : ((x > y)
        ? 1
        : 0));
  });
}

export default Header;
