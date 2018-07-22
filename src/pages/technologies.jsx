import React, { Component } from 'react';
import '../css/pages/technologies.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx';
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx';

class Technologies extends Component {
  render() {
    return (
      <div className='technologies-page'>
        <ScrollToPreviousSection sectionSelector='.skills-page' />

        <div className='wow slideInRight technologies-title'>
          <div className='decorative-line-dark'></div>
          <h1>TECHNOLOGIES</h1>
          <div className='decorative-line-dark'></div>
        </div>

        <div className='technologies'>
          <img className='wow fadeInLeft' data-wow-delay='850ms' src='javascript-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='800ms' src='ruby-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='750ms' src='rails-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='700ms' src='html-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='650ms' src='css-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='600ms' src='nodejs-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='550ms' src='react-icon.png'/>
          <img className='wow fadeInLeft' data-wow-delay='500ms' src='postgresql.png'/>
        </div>

        <ScrollToNextSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Technologies
