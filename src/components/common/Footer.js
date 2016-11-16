import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Navbar className="navbar-static-bottom">
    <Link to="/about" activeClassName="active">Contact Us</Link>
    <span className="clearfix">Copyright &copy; 2016 State of California</span>
    </Navbar>
  );
}

export default Footer;
