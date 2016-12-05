import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Navbar className="navbar-static-bottom">
    <Link to="/about" activeClassName="active" className="col-xs-12 text-center">Contact Us</Link>
    <span className="col-xs-12 text-center">Copyright &copy; 2016 State of California</span>
    <span className="version">Version {process.env.VERSION}</span>
    </Navbar>
  );
}

export default Footer;
