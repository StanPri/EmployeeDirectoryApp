import React, {PropTypes} from 'react';

class Employee extends React.Component {
  render() {
    return (
      <tbody>
        {Object.keys(this.props.employee).map((key) => {
          return <tr key={key}>
            <td>{key}</td>
            <td>{this.props.employee[key]}</td>
          </tr>;
        })}
      </tbody>
    );
  }
}

Employee.propTypes = {
  employee: PropTypes.object.isRequired
};

export default Employee;
