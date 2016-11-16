import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';
import PageNumbers from './Employee-PageNumbers';

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onPageClick: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  firstEmployeeOnPage: PropTypes.number.isRequired,
  lastEmployeeOnPage: PropTypes.number.isRequired
};

function EmployeeList(props) {

  let _employees = props.employees.slice(props.firstEmployeeOnPage, props.lastEmployeeOnPage);

  return (
    <div>
      <Table striped bordered hover className={Object.keys(props.employees).length ? '' : 'hidden'}>
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
              <tr key={key} onClick={props.onClick} data-employee={key}>
                <td>{_employees[key]['GivenName']}</td>
                <td>{_employees[key]['SurName']}</td>
                <td>{_employees[key]['Department']}</td>
              </tr>);
          })}
        </tbody>
      </Table>
      <PageNumbers
        onPageClick = {props.onPageClick}
        numberOfPages = {props.numberOfPages}
        currentPage = {props.currentPage}/>
    </div>
  );
}

export default EmployeeList;
