import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

ManagerDetail.propTypes = {
  manager: PropTypes.object
};

function ManagerDetail(props) {
  const fields = {
    'FullName': 'Name',
    'OfficePhone': 'Desk Phone',
    'EmailAddress': 'Email'
  };
  return (
    <Table bordered>
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
                {props.manager ? props.manager[key] : ''}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ManagerDetail;
