import React, {PropTypes} from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';

Search.propTypes = {
  EmployeeSearchOnInput: PropTypes.func.isRequired
};

function Search(props) {

  return (
      <FormGroup className="has-feedback">
          <FormControl id="employee-search" type="text" placeholder="Search" onInput={props.EmployeeSearchOnInput}/>
          <span className="glyphicon glyphicon-search form-control-feedback"/>
      </FormGroup>
  );
}

export default Search;
