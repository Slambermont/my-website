import React, { Component } from 'react';
import '../css/pages/technologies.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx';
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx';
import Reveal from '../components/reveal.jsx';

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
          <Reveal imageName='javascript-icon.png' delay='850ms' techName='JAVASCRIPT' />
          <Reveal imageName='ruby-icon.png' delay='800ms' techName='RUBY' />
          <Reveal imageName='rails-icon.png' delay='750ms' techName='RAILS' />
          <Reveal imageName='html-icon.png' delay='700ms' techName='HTML5' />
          <Reveal imageName='css-icon.png' delay='650ms' techName='CSS3' />
          <Reveal imageName='nodejs-icon.png' delay='600ms' techName='NODEJS' />
          <Reveal imageName='react-icon.png' delay='550ms' techName='REACTJS' />
          <Reveal imageName='postgresql.png' delay='500ms' techName='POSTGRESQL' />
        </div>

        <ScrollToNextSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Technologies
