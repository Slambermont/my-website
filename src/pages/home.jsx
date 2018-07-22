import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/pages/home.css'

class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <h2>Welcome to my website!</h2>
        <Link to='/about'>Come in</Link>
      </div>
    );
  }
}

export default Home
