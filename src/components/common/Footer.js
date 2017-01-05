import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="version">Version {process.env.VERSION}</div>
  );
}

export default Footer;
