import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is my home page</h2>
        <Link to='/about'>ABOUT</Link>
      </div>
    );
  }
}

export default Home
