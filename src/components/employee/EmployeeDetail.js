import React, {PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

class EmployeeDetail extends React.Component {
  render() {
    // fields => {fieldName in data : printedName}
    const fields = {
      'Title': 'Classification',
      'OfficePhone': 'Desk Phone',
      'MobilePhone': 'Mobile Phone',
      'Fax': 'Fax',
      'EmailAddress': 'Email',
      'Department': 'Department',
      'Office': 'Campus',
      'PostalCode': 'RU #',
      'RoomNumber': 'Desk',
      'POBox': 'MS'
    }
    return (
      <Table bordered>
        <thead>
          <tr className="active">
            <th colSpan="2">
              <h2 className="pull-left">{this.props.employee.FullName}</h2>
              <Button className="pull-right" bsSize="large">Print</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fields).map((key) => {
            return <tr key={key}>
              <td className="col-xs-3">{fields[key]}</td>
              <td className="col-xs-9">{this.props.employee[key]}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }
}

EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeDetail;
