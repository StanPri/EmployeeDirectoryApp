import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Button} from 'react-bootstrap';
import json2csv from 'json2csv';

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
    fetch(process.env.API_URL).then(response => response.json()).then(json => {
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
      <div>
        <Navbar fluid>
          <input type="checkbox" id="navbar-toggle-cbox" className="hidden"/>
          <div className="navbar-header">
            <h1 className="header-title">
              <Link to="/">
                Employee Directory
              </Link>
            </h1>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" activeClassName="active">
                  <Button className="btn-outline"><span className="glyphicon glyphicon-home button-icon"/>Home</Button>
                </IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active">
                  <Button className="btn-outline"><span className="glyphicon glyphicon-question-sign button-icon"/>About</Button>
                </Link>
              </li>
            </ul>
        </Navbar>
        <div id="navbar-overlay" className="hidden"/>
      </div>
    );
  }
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
