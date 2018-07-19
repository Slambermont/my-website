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

        <div className='technologies'>
          <img className='wow fadeInRight' data-wow-delay='850ms' src='javascript-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='800ms' src='ruby-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='750ms' src='rails-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='700ms' src='html-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='650ms' src='css-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='600ms' src='nodejs-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='550ms' src='react-icon.png'/>
          <img className='wow fadeInRight' data-wow-delay='500ms' src='postgresql.png'/>
        </div>
        <ScrollToNextSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Skills
