import React from 'react';
import {Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about">
          <Button bsStyle="success" bsSize="large">Get started today</Button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
