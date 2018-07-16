import React, { Component } from 'react';
import { toElement as scrollToElement } from './scroll.jsx';
import '../css/components/nav_bar.css';

class NavBar extends Component {
  scrollToPage(sectionSelector) {
    const targetSection = document.querySelector(sectionSelector);
    scrollToElement(targetSection);
  }

  render() {
    return (
      <div className='nav-bar'>
        <h2>This is the NAVIGATION bar</h2>
        <nav>
          <a onClick={() => this.scrollToPage('.about-page')}>About</a>
          <a onClick={() => this.scrollToPage('.skills-page')}>Skills</a>
          <a onClick={() => this.scrollToPage('.contact-page')}>Contact</a>
        </nav>
      </div>
    );
  }
}

export default NavBar
