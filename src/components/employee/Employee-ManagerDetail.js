import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

ManagerDetail.propTypes = {
  manager: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired
};

function ManagerDetail(props) {
  const fields = {
    'FullName': 'Name',
    'OfficePhone': 'Desk Phone',
    'EmailAddress': 'Email'
  };
  return (
    <Table bordered className={Object.keys(props.employee).length ? '' : 'hidden'}>
      <thead>
        <tr className="active">
          <th colSpan="2">
            <h3>Manager</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map((key) => {
          return (
            <tr key={key}>
              <td className="col-xs-3">{fields[key]}</td>
              <td className="col-xs-9">
                {Object.keys(props.manager).length ? props.manager[key] : 'Not Available'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ManagerDetail;
