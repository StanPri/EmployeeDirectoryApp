import React, {PropTypes} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Pagination from 'react-bootstrap/lib/Pagination';

class PageNumbers extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Pagination prev next items={5} maxButtons={5} bsSize="large"/>
      </div>
    );
  }
}

PageNumbers.propTypes = {};

export default PageNumbers;

// TODO: hook up buttons to change pages/ highlight current
