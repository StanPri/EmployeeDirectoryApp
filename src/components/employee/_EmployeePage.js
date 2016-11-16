import React, {PropTypes} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import EmployeeSearch from './Employee-Search';
import EmployeeList from './Employee-List';
import PageNumbers from './Employee-PageNumbers';
import EmployeeDetail from './Employee-Detail';
import ManagerDetail from './Employee-ManagerDetail';
import EmployeeData from '../../data/TestData';

const NumPerPage = 15;

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      employees: [],
      filter: '',
      employee: {},
      manager: {}
    };
    this.EmployeeSearchHandleChange = this.EmployeeSearchHandleChange.bind(this);
    this.EmployeeListHandleClick = this.EmployeeListHandleClick.bind(this);
  }

  EmployeeSearchHandleChange(e) {
    if (e.target.value.length) {
      let _search = e.target.value;
      let re = new RegExp(_search, 'i');
      let _employees = EmployeeData.filter((emp) => {
        if (emp.FullName.match(re) || emp.Department.match(re)) {
          return true;
        }
        return false;
      }).slice(0, NumPerPage);
      this.setState({employees: _employees});
    }
    else {
      this.setState({employees: []});
    }
    this.setState({employee: {}});
  }

  EmployeeListHandleClick(e) {
    let _employee = this.state.employees[e.target.parentNode.dataset.employee];
    let _manager = EmployeeData.filter((emp) => {
      return emp.FullName === _employee.Manager;
    })[0];
    this.setState({employee: _employee || {}});
    this.setState({manager: _manager || {}});
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
            <EmployeeList
              employees={this.state.employees}
              onClick={this.EmployeeListHandleClick}
              filter={this.state.filter}/>
            <PageNumbers/>
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

EmployeePage.propTypes = {};

export default EmployeePage;
