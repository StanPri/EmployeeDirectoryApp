import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import EmployeeDetail from './Employee-Detail';

const EMPLOYEE_EMPTY = {};
const EMPLOYEE_MISSING_FIELDS = {};
// const EMPLOYEE_COMPLETE =

const setup = ({employee}) => {
  const props = {
    employee: employee || {}
  };

  return shallow(<EmployeeDetail {...props}/>);
};

describe('<EmployeeDetail />', () => {
  // it('renders table, thead, and tbody', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find('table').length).toBe(1);
  //   expect(wrapper.find('table').find('thead').length).toBe(1);
  //   expect(wrapper.find('table').find('tbody').length).toBe(1);
  // });
  // it('employee empty -> table hidden', () => {
  //   const wrapper = setup({employee:EMPLOYEE_EMPTY});
  //   expect(wrapper.find('table').hasClass('hidden')).toBe(true);
  // });
  // it('employee not empty -> table visible', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find('table').hasClass('hidden')).toBe(false);
  // });
  // it('renders correct name in th', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find('.employee-detail-header').text()).toEqual();
  // });
});

//TODO: employee name in header
//TODO: correct number of rows? only 1??
//TODO: fields data mapping correctly
//TODO: fields names mapping correctly
//TODO: empty fields mapping to '(Not Available)'
