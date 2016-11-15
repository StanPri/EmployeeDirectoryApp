import React, {PropTypes} from 'react';
import {Button, Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap';

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

function Search(props) {
  return (
    <Form horizontal className="employee-search">
      <FormGroup>
        <InputGroup bsSize="lg">
          <FormControl type="text" onChange={props.onChange}/>
          <InputGroup.Button>
            <Button>Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default Search;
