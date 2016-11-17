import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import EmployeeSearch from './Employee-Search';
import EmployeeList from './Employee-List';
import PageNumbers from './Employee-PageNumbers';
import EmployeeDetail from './Employee-Detail';
import ManagerDetail from './Employee-ManagerDetail';

const NumPerPage = 15;

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: [],
      employees: [],
      numberOfPages: 0,
      currentPage: 1,
      firstEmployeeOnPage: 0,
      lastEmployeeOnPage: NumPerPage,
      filter: '',
      employee: {},
      manager: {}
    };
    this.EmployeeSearchHandleChange = this.EmployeeSearchHandleChange.bind(this);
    this.EmployeeListHandleClick = this.EmployeeListHandleClick.bind(this);
    this.PageNumbersHandleClick = this.PageNumbersHandleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://EDAPI/employees')
      .then(response => response.json())
      .then(json => {
        json = sortByKey(json, 'lastName');
        this.setState({
          employees: json,
          employeeData: json,
          numberOfPages: Math.ceil(json.length / NumPerPage)
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
      let _numberOfPages = Math.ceil(_employees.length / NumPerPage);
      this.setState({employees: _employees});
      this.setState({numberOfPages: _numberOfPages});
    } else {
      this.setState({employees: []});
      this.setState({numberOfPages: 0});
    }
    // remove all highlighting from employeeList
    document.querySelectorAll('[data-employee]').forEach((e) => {
      e.classList.remove('active');
    });
    this.setState({employee: {}});
    this.setState({firstEmployeeOnPage: 0});
    this.setState({lastEmployeeOnPage: NumPerPage});
  }

  EmployeeListHandleClick(e) {
    let _employee = this.state.employees[this.state.firstEmployeeOnPage + +e.target.parentNode.dataset.employee];
    let _manager = this.state.employeeData.filter((emp) => {
      return emp.fullName === _employee.manager;
    })[0];
    // remove all highlighting from employeeList then add to selected row
    document.querySelectorAll('[data-employee]').forEach((e) => {
      e.classList.remove('active');
    });
    e.target.parentNode.classList.add('active');
    this.setState({
      employee: _employee || {}
    });
    this.setState({
      manager: _manager || {}
    });
  }

  PageNumbersHandleClick(e) {
    let _lastEmployeeOnPage = e * NumPerPage;
    let _firstEmployeeOnPage = _lastEmployeeOnPage - 15;
    this.setState({currentPage: e});
    this.setState({firstEmployeeOnPage: _firstEmployeeOnPage});
    this.setState({lastEmployeeOnPage: _lastEmployeeOnPage});
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <EmployeeSearch onChange={this.EmployeeSearchHandleChange}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="left-column">
            <EmployeeList employees={this.state.employees} numberOfPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.EmployeeListHandleClick} onPageClick={this.PageNumbersHandleClick} filter={this.state.filter} firstEmployeeOnPage={this.state.firstEmployeeOnPage} lastEmployeeOnPage={this.state.lastEmployeeOnPage}/>
          </Col>
          <Col xs={12} lg={6}>
            <EmployeeDetail employee={this.state.employee}/>
          </Col>
          <Col xs={11} lg={5}>
            <ManagerDetail employee={this.state.employee} manager={this.state.manager}/>
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

EmployeePage.propTypes = {};

export default EmployeePage;
