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
      numPerPage: 15,
      filter: '',
      employee: {},
      manager: {}
    };
    this.EmployeeSearchHandleChange = this.EmployeeSearchHandleChange.bind(this);
    this.EmployeeListHandleClick = this.EmployeeListHandleClick.bind(this);
    this.EmployeePageNumbersHandleSelect = this.EmployeePageNumbersHandleSelect.bind(this);
  }

  componentDidMount() {
    fetch('http://EDAPI/employees')
      .then(response => response.json())
      .then(json => {
        json = sortByKey(json, 'lastName');
        this.setState({
          employees: json,
          employeeData: json,
          numberOfPages: Math.ceil(json.length / this.state.numPerPage)
        });
      });
  }

  EmployeeSearchHandleChange(e) {
    if (e.target.value.length) {
      let _search = '(?=.*' + e.target.value.split(/, +|,| +/).join(')(?=.*') + ')';
      let re = new RegExp(_search, 'i');
      let _employees = this.state.employeeData.filter((emp) => {
        if (emp.fullName.match(re) || emp.group.match(re)) {
          return true;
        }
        return false;
      });
      let _numberOfPages = Math.ceil(_employees.length / this.state.numPerPage);
      this.setState({employees: _employees});
      this.setState({numberOfPages: _numberOfPages});
    } else {
      this.setState({employees: []});
      this.setState({numberOfPages: 0});
    }
    removeActive();
    this.setState({employee: {}});
    this.setState({currentPage: 0});
  }

  EmployeeListHandleClick(e) {
    let _employee = this.state.employees[this.state.currentPage * this.state.numPerPage + +e.target.parentNode.dataset.employee];
    let _manager = this.state.employeeData.filter((emp) => {
      return emp.fullName === _employee.manager;
    })[0];
    // remove all highlighting from employeeList then add to selected row
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
    this.setState({currentPage: e-1});
    removeActive();
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <EmployeeSearch EmployeeSearchOnChange={this.EmployeeSearchHandleChange}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="left-column">
            <EmployeeList employees={this.state.employees} numberOfPages={this.state.numberOfPages}
              currentPage={this.state.currentPage} EmployeeListOnClick={this.EmployeeListHandleClick}
              EmployeePageNumbersOnSelect={this.EmployeePageNumbersHandleSelect}
              numPerPage={this.state.numPerPage}/>
          </Col>
          <Col xs={12} lg={6}>
            <EmployeeDetail employee={this.state.employee}/>
          </Col>
          <Col xs={11} lg={5}>
            <EmployeeManagerDetail employee={this.state.employee} manager={this.state.manager}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

function removeActive() {
  document.querySelectorAll('[data-employee]').forEach((e) => {
    e.classList.remove('active');
  });
}

EmployeePage.propTypes = {};

export default EmployeePage;
