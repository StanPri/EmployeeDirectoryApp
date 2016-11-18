import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

ManagerDetail.propTypes = {
  manager: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

function ManagerDetail(props) {
  const fields = {
    'fullName': 'Name',
    'deskPhone': 'Desk Phone',
    'email': 'Email'
  };
  return (
    <Table bordered condensed className={Object.keys(props.employee).length ? '' : 'hidden'}>
      <thead>
        <tr className="table-header">
          <th colSpan="2">
            <h4>Manager</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(fields).map((key) => {
          return (
            <tr key={key}>
              <td className="col-xs-3">{fields[key]}</td>
                <td className="col-xs-9">
                {//If manager exists
                  (( Object.keys(props.manager).length) ?
                  //If the key is name
                    ( (fields[key] === 'Name') ?
                      //then create a hyperlink
                      <input type="button" className={'employee-manager-row'}
                      onClick={props.onClick}
                      value={props.manager[key]} />
                      //otherwise, just output the data
                      :  props.manager[key])
                  //or if manager doesn't exist then...
                  : 'Not Available' )
                }
                </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ManagerDetail;
