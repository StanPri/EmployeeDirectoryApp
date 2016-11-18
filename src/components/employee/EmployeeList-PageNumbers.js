import React, {PropTypes} from 'react';
import {Col, Pagination, Row} from 'react-bootstrap';

PageNumbers.propTypes = {
  EmployeePageNumbersOnSelect: PropTypes.func.isRequired,
  numberOfPages : PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired

};

function PageNumbers(props) {
  return (
    <div className="text-center">
      <Pagination maxButtons={5} bsSize="medium" first last boundaryLinks
      items={props.numberOfPages} activePage={props.currentPage+1}
      onSelect={props.EmployeePageNumbersOnSelect}/>
    </div>
  );
}

export default PageNumbers;
