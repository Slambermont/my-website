import React, { Component } from 'react';
import '../css/pages/skills.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx';
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx';
import WOW from "wowjs";

class Skills extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className='skills-page'>
        <ScrollToPreviousSection sectionSelector='.about-page' />
        
        <div className='wow slideInLeft skills-title'>
          <div className='decorative-line-dark'></div>
          <h1>SKI LLS AT A GL ANCE</h1>
          <div className='decorative-line-dark'></div>
        </div>

        <div className='skills'>
          <div className='skill wow flipInY'>
            <h2>TEST DRIVEN DEVELOPMENT</h2>
          </div>
          <div className='skill wow flipInY' data-wow-delay='150ms'>
            <h2>AGILE METHODOLOGY</h2>
          </div>
          <div className='skill wow flipInY' data-wow-delay='300ms'>
            <h2>OBJECT ORIENTED DESIGN</h2>
          </div>
          <div className='skill wow flipInY' data-wow-delay='450ms'>
            <h2>PAIR PROGRAMMING</h2>
          </div>
        </div>

        <ScrollToNextSection sectionSelector='.technologies-page' />
      </div>
    );
  }
}

export default Skills
