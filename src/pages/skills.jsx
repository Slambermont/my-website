import React, { Component } from 'react';
import '../css/pages/skills.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx';
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx';

class Skills extends Component {
  render() {
    return (
      <div className='skills-page'>
        <ScrollToPreviousSection sectionSelector='.about-page' />
        <h2>This is my SKILLS page</h2>
        <ScrollToNextSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Skills
