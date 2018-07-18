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
        <div className='decorative-line'></div>
        <nav>
          <a onClick={() => this.scrollToPage('.contact-page')}>C O N T A C T</a>
          <a onClick={() => this.scrollToPage('.skills-page')}>S K I L L S</a>
          <a onClick={() => this.scrollToPage('.about-page')}>A B O U T</a>
        </nav>
      </div>
    );
  }
}

export default NavBar
