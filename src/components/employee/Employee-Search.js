import React, {PropTypes} from 'react';
import {Button, Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap';

Search.propTypes = {
  EmployeeSearchOnChange: PropTypes.func.isRequired
};

function Search(props) {
  return (
    <Form horizontal className="employee-search">
      <FormGroup>
        <InputGroup bsSize="lg">
          <FormControl type="text" placeholder="Search" onChange={props.EmployeeSearchOnChange}/>
          <InputGroup.Button>
            <Button>Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default Search;
