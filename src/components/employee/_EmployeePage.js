import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import EmployeeSearch from './Employee-Search';
import EmployeeList from './Employee-List';
import EmployeeDetail from './Employee-Detail';
import EmployeeManagerDetail from './Employee-ManagerDetail';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: [],
      employees: [],
      numberOfPages: 0,
      currentPage: 0,
      numPerPage: 16,
      employee: {},
      manager: {}
    };
    this.EmployeeSearchHandleInput = this.EmployeeSearchHandleInput.bind(this);
    this.EmployeeListHandleClick = this.EmployeeListHandleClick.bind(this);
    this.EmployeePageNumbersHandleSelect = this.EmployeePageNumbersHandleSelect.bind(this);
    this.EmployeeManagerDetailHandleClick = this.EmployeeManagerDetailHandleClick.bind(this);
  }

  componentDidMount() {
    fetch(process.env.API_URL).then(response => response.json()).then(json => {
      json = sortByKey(json, 'lastName');
      this.setState({
        employees: json,
        employeeData: json,
        numberOfPages: Math.ceil(json.length / this.state.numPerPage)
      });
    });
  }

  EmployeeSearchHandleInput(e) {
    if (e.target.value.length) {
      let _search = '(?=.*' + e.target.value.split(/, +|,| +/).join(')(?=.*') + ')';
      let re = new RegExp(_search, 'i');
      let _employees = this.state.employeeData.filter((emp) => {
        if (`${emp.fullName} ${emp.group}`.match(re)) {
          return true;
        }
        return false;
      });
      this.setState({employees: _employees});
      this.setState({
        numberOfPages: Math.ceil(_employees.length / this.state.numPerPage)
      });
    } else {
      this.setState({employees: this.state.employeeData});
      this.setState({
        numberOfPages: Math.ceil(this.state.employeeData.length / this.state.numPerPage)
      });
    }
    removeActive();
    this.setState({employee: {}});
    this.setState({currentPage: 0});
  }

  EmployeeListHandleClick(e) {
    let _employee = this.state.employees[this.state.currentPage * this.state.numPerPage + + e.target.parentNode.dataset.employee];
    let _manager = this.state.employeeData.filter((emp) => {
      return emp.fullName === _employee.manager;
    })[0];
    removeActive();
    e.target.parentNode.classList.add('active');
    this.setState({
      employee: _employee || {}
    });
    this.setState({
      manager: _manager || {}
    });
  }

  EmployeePageNumbersHandleSelect(e) {
    this.setState({
      currentPage: e - 1
    });
    removeActive();
  }

  EmployeeManagerDetailHandleClick(e) {
    let _employee = this.state.employeeData.filter((emp) => {
      return emp.fullName === e.target.value;
    })[0];
    let _manager = this.state.employeeData.filter((emp) => {
      return emp.fullName === _employee.manager;
    })[0];
    this.setState({
      employee: _employee || {}
    });
    this.setState({
      manager: _manager || {}
    });
    removeActive();
  }

  render() {
    return (
      <Grid fluid>
        <Row className="no-print">
          <Col xs={12} sm={6} smOffset={3}>
            <EmployeeSearch EmployeeSearchOnInput={this.EmployeeSearchHandleInput}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="left-column no-print">
            <EmployeeList employees={this.state.employees} numberOfPages={this.state.numberOfPages} currentPage={this.state.currentPage} EmployeeListOnClick={this.EmployeeListHandleClick} EmployeePageNumbersOnSelect={this.EmployeePageNumbersHandleSelect} numPerPage={this.state.numPerPage}/>
          </Col>
          <Col xs={12} md={6} className="right-column">
            <EmployeeDetail employee={this.state.employee}/>
            <EmployeeManagerDetail employee={this.state.employee} manager={this.state.manager} EmployeeManagerDetailOnClick={this.EmployeeManagerDetailHandleClick}/>
          </Col>
        </Row>
      </Grid>
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

function removeActive() {
  let e = document.querySelectorAll('[data-employee]');
  for (let i of e) {
    i.classList.remove('active');
  }
}

EmployeePage.propTypes = {};

export default EmployeePage;
