import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

function EmployeeList(props) {
  return (
    <Table striped bordered hover className={Object.keys(props.employees).length ? '' : 'hidden'}>
      <thead>
        <tr>
          <th className="col-xs-3">First Name</th>
          <th className="col-xs-3">Last Name</th>
          <th className="col-xs-6">Group</th>
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
