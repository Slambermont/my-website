import React, { Component } from 'react';
import '../css/pages/about.css';
import ScrollToSection from '../components/scrollToSection.jsx'

class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <h2>This is my ABOUT page</h2>
        <ScrollToSection sectionSelector='.skills-page' />
      </div>
    );
  }
}

export default About
