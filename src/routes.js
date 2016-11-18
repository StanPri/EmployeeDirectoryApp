import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/_AboutPage';
import EmployeePage from './components/employee/_EmployeePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmployeePage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={EmployeePage} />
  </Route>
);
