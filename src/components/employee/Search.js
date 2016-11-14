import React, {PropTypes} from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class Search extends React.Component {
  render() {
    return (
      <Form horizontal className="search-box">
        <FormGroup>
          <InputGroup bsSize="lg">
            <FormControl type="text" onChange={this.props.onChange}></FormControl>
            <InputGroup.Button>
              <Button>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;

//TODO: hook up filtering!!
