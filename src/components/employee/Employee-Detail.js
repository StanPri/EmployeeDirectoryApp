import React, {PropTypes} from 'react';
import {Button, Table} from 'react-bootstrap';

EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired
};

function EmployeeDetail(props) {
  const fields = {
    'Department': 'Group',
    'Title': 'Classification',
    'OfficePhone': 'Desk Phone',
    'EmailAddress': 'Email Address',
    'MobilePhone': 'Cell Phone',
    'Fax': 'Fax Number',
    'EmployeeNumber': 'Employee Number',
    'PostalCode': 'Reporting Unit',
    'Office': 'Campus',
    'RoomNumber': 'Desk Location',
    'POBox': 'Mail Stop'
  };
  return (
    <Table bordered className={Object.keys(props.employee).length ? '' : 'hidden'}>
      <thead>
        <tr className="table-header">
          <th colSpan="2">
            <h2 className="pull-left">{props.employee.FullName}</h2>
            <Button className="pull-right" bsSize="large">Print</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map((key) => {
          return (
            <tr key={key}>
              <td className="col-xs-3">{fields[key]}</td>
              <td className="col-xs-9">{props.employee[key]}</td>
            </tr>);
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeDetail;
