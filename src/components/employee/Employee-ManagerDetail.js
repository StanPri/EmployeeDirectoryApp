import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';

ManagerDetail.propTypes = {
  manager: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  EmployeeManagerDetailOnClick: PropTypes.func.isRequired
};

function ManagerDetail(props) {
  return (
    <Table bordered condensed className={Object.keys(props.employee).length ? '' : 'hidden'}>
      <thead>
        <tr>
          <th colSpan="2">
            Manager
          </th>
        </tr>
      </thead>
      <tbody>
        <tr key="managerName">
          <td className="col-xs-3">Name</td>
          <td className="col-xs-9">
            {props.manager.fullName ?
            <input type="button" className={'employee-manager-row'}
            onClick={props.EmployeeManagerDetailOnClick}
            value={props.manager.fullName} />
            : '(Not Available)'}
          </td>
        </tr>
        <tr key="managerDeskPhone">
          <td className="col-xs-3">Desk Phone</td>
          <td className="col-xs-9">
            {props.manager.deskPhone ? props.manager.deskPhone : '(Not Available)'}
          </td>
        </tr>
        <tr key="managerEmail">
          <td className="col-xs-3">Email</td>
          <td className="col-xs-9">
            {props.manager.email ? <a href={"mailto:" + props.manager.email}>{props.manager.email}</a>
            : '(Not Available)'}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ManagerDetail;
