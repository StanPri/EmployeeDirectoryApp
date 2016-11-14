import React, {PropTypes} from 'react';

/* bootstrap */
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

/* components */
import Search from './Search';
import EmployeeList from './EmployeeList';
import PageNumbers from './PageNumbers';
import EmployeeDetail from './EmployeeDetail';
import ManagerDetail from './ManagerDetail';

/* mock data */
import EMPLOYEES from './TEST_DATA';

const NUM_PAGES = 14;

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      employees: EMPLOYEES.slice(0, NUM_PAGES),
      filter: '',
      employee: EMPLOYEES[0],
      manager: EMPLOYEES.filter((emp) => {
        return emp.FullName === EMPLOYEES[0].Manager
      })[0]
    };
    this.search = this.search.bind(this);
    this.employeeListClick = this.employeeListClick.bind(this);
  }
  /*  search box value changed
      updates displayed employee list results   */
  search(e) {
    let _search = e.target.value;
    let re = new RegExp(_search, 'i');
    let _employees = EMPLOYEES.filter((emp) => {
      for (let key in emp) {
        if (emp[key].match(re)) {
          return true;
        }
      }
      return false;
    }).slice(0, NUM_PAGES);
    this.setState({employees: _employees});
  }

  /*  row of employee list clicked
      updates employee detail, manager detail  */
  employeeListClick(e) {
    let _employee = this.state.employees[e.target.parentNode.dataset.employee];
    let _manager = EMPLOYEES.filter((emp) => {
      return emp.FullName === _employee.Manager
    })[0];
    this.setState({employee: _employee});
    this.setState({manager: _manager});
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Search onChange={this.search}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="leftCol">
            <EmployeeList
              employees={this.state.employees}
              onClick={this.employeeListClick}
              filter={this.state.filter}/>
            <PageNumbers/>
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

//TODO: import actual data, add handlers,etc...
