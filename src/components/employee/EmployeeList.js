import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

class EmployeeList extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.employees).map((key) => {
            return <tr key={key} onClick={this.props.onClick} data-employee={key}>
              <td>{this.props.employees[key]['GivenName']}</td>
              <td>{this.props.employees[key]['SurName']}</td>
              <td>{this.props.employees[key]['Department']}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EmployeeList;
