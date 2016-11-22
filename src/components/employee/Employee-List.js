import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import EmployeeListPageNumbers from './EmployeeList-PageNumbers';

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  EmployeeListOnClick: PropTypes.func.isRequired,
  EmployeePageNumbersOnSelect: PropTypes.func.isRequired,
  numPerPage: PropTypes.number.isRequired
};

function EmployeeList(props) {
  let _start = props.currentPage * props.numPerPage;
  let _employees = props.employees.slice(_start, _start + props.numPerPage);
  return (
    <div>
      <Table striped bordered hover condensed>
        <thead>
          <tr>
            <th className="col-xs-3">First Name</th>
            <th className="col-xs-3">Last Name</th>
            <th className="col-xs-6">Group</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(_employees).map((key) => {
            return (
              <tr key={key} onClick={props.EmployeeListOnClick} data-employee={key} className={'employee-list-row'}>
                <td>{_employees[key]['firstName'] ? _employees[key]['firstName'] : "(Not Available)"}</td>
                <td>{_employees[key]['lastName'] ? _employees[key]['lastName'] : "(Not Available)"}</td>
                <td>{_employees[key]['group'] ? _employees[key]['group'] : "(Not Available)"}</td>
              </tr>);
          })}
        </tbody>
      </Table>
      <EmployeeListPageNumbers
        EmployeePageNumbersOnSelect = {props.EmployeePageNumbersOnSelect}
        numberOfPages = {props.numberOfPages}
        currentPage = {props.currentPage}/>
    </div>
  );
}

export default EmployeeList;
