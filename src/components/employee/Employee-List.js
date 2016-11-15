import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

function EmployeeList(props) {
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
        {Object.keys(props.employees).map((key) => {
          return (
            <tr key={key} onClick={props.onClick} data-employee={key}>
              <td>{props.employees[key]['GivenName']}</td>
              <td>{props.employees[key]['SurName']}</td>
              <td>{props.employees[key]['Department']}</td>
            </tr>);
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeList;
