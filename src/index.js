import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './css/style.less';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
