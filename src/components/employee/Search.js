import React, {PropTypes} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}/>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired
};

export default Search;
