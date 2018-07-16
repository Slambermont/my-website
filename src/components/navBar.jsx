import React, { Component } from 'react';
import '../css/components/nav_bar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <h2>This is the NAVIGATION bar</h2>
        <nav>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    )
  }
}

export default NavBar
