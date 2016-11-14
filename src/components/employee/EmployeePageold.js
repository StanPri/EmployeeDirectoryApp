import React, {PropTypes} from 'react';
/* bootstrap */
import Grid from 'react-bootstrap/lib/Grid';
import Table from 'react-bootstrap/lib/Table';
/* components */
import Employee from './Employee';
import Search from './Search';
/* mock data */
import emp_data from './TEST_DATA';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: emp_data.emp1,
      value: ''
    };
    this.setSearch = this.setSearch.bind(this);
  }
  setSearch(e) {
    this.state.value = e.target.value;
    this.setState({value: this.state.value});
  }
  render() {
    return (
      <Grid fluid>
        <Search value={this.state.value} onChange={this.setSearch}/>
        <h1>Employee Data</h1>
        <Table bordered striped>
          <Employee employee={this.state.data}/>
        </Table>
      </Grid>
    );
  }
}

EmployeePage.propTypes = {};

export default EmployeePage;
