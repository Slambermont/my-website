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
        <div className='skills-page-content'>
          <ScrollToPreviousSection sectionSelector='.about-page' />
          <h2>Skills at a Glance</h2>
          <div className='skills'>
            <div className='wow flipInY'>
              <div>Test Driven Development</div>
            </div>
            <div className='wow flipInY' data-wow-delay='150ms'>
              <div>Agile Methodology</div>
            </div>
            <div className='wow flipInY' data-wow-delay='300ms'>
              <div>Object Oriented Design</div>
            </div>
            <div className='wow flipInY' data-wow-delay='450ms'>
              <div>Pair Programming</div>
            </div>
          </div>
          <ScrollToNextSection sectionSelector='.contact-page' />
        </div>
      </div>
    );
  }
}

export default Skills
