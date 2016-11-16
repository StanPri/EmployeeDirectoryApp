import React, {PropTypes} from 'react';
import {Col, Pagination, Row} from 'react-bootstrap';

PageNumbers.propTypes = {};

function PageNumbers(props) {
  return (
    <div className="text-center">
      <Pagination prev next items={5} maxButtons={5} bsSize="large"/>
    </div>
  );
}

export default PageNumbers;
