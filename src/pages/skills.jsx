import React, { Component } from 'react';
import '../css/pages/skills.css';
import ScrollToSection from '../components/scrollToSection.jsx';

class Skills extends Component {
  render() {
    return (
      <div className='skills-page'>
        <ScrollToSection sectionSelector='.about-page' />
        <h2>This is my SKILLS page</h2>
        <ScrollToSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Skills
