import React, {PropTypes} from 'react';
import {Button, Table} from 'react-bootstrap';

EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired
};

function EmployeeDetail(props) {
  const fields = {
    //left hand side is api names, right hand side is rendering
    'group': 'Group',
    'classification': 'Classification',
    'deskPhone': 'Desk Phone',
    'email': 'Email Address',
    'cellPhone': 'Cell Phone',
    'faxNumber': 'Fax Number',
    'employeeNumber': 'Employee Number',
    'reportingUnit': 'Reporting Unit',
    'campus': 'Campus',
    'deskLocation': 'Desk Location',
    'mailStop': 'Mail Stop'
  };
  return (
    <Table bordered condensed className={Object.keys(props.employee).length
      ? ''
      : 'hidden'}>
      <thead>
        <tr>
          <th colSpan="2">
            <span className="pull-left employee-detail-header">{props.employee.fullName}</span>
            <Button className="pull-right no-print" onClick={window.print}>Print</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map((key) => {
          return (
            <tr key={key}>
              <td className="col-xs-3">{fields[key]}</td>
              <td className="col-xs-9">
                {props.employee[key]
                  ? key === 'email'
                    ? <a href={"mailto:" + props.employee.email}>{props.employee.email}</a>
                    : props.employee[key]
                  : '(Not Available)'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeDetail;
