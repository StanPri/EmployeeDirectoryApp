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
      numberOfPages: 0,
      currentPage: 1,
      employees: EmployeeData.slice(0, NumPerPage),
      filter: '',
      employee: EmployeeData[0],
      manager: EmployeeData.filter((emp) => {
        return emp.FullName === EmployeeData[0].Manager;
      })[0]
    };
    this.EmployeeSearchHandleChange = this.EmployeeSearchHandleChange.bind(this);
    this.EmployeeListHandleClick = this.EmployeeListHandleClick.bind(this);
    this.PageNumbersHandleClick = this.PageNumbersHandleClick.bind(this);
  }

  EmployeeSearchHandleChange(e) {
    let _search = e.target.value;
    let re = new RegExp(_search, 'i');
    let _employees = EmployeeData.filter((emp) => {
      if (emp.FullName.match(re) || emp.Department.match(re)) {
        return true;
      }
      return false;
    });
    let _numberOfPages = Math.ceil(_employees.length / NumPerPage);
    _employees = _employees.slice(0, NumPerPage);
    this.setState({employees: _employees});
    this.setState({numberOfPages: _numberOfPages});
  }

  EmployeeListHandleClick(e) {
    let _employee = this.state.employees[e.target.parentNode.dataset.employee];
    let _manager = EmployeeData.filter((emp) => {
      return emp.FullName === _employee.Manager;
    })[0];
    this.setState({employee: _employee});
    this.setState({manager: _manager});
  }

  PageNumbersHandleClick(e){
    let _employees = this.state.employees;

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
          <Col xs={12} lg={6}>
            <EmployeeList
              employees={this.state.employees}
              numberOfPages={this.state.numberOfPages}
              currentPage={this.state.currentPage}
              onClick={this.EmployeeListHandleClick}
              onPageClick={this.PageNumbersHandleClick}
              filter={this.state.filter}/>
          </Col>
          <Col xs={12} lg={6}>
            <EmployeeDetail employee={this.state.employee}/>
          </Col>
          <Col xs={11} lg={5}>
            <ManagerDetail manager={this.state.manager}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

EmployeePage.propTypes = {};

export default EmployeePage;
