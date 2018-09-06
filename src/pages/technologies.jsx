import React, { Component } from 'react';
import '../css/pages/technologies.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx';
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx';
import Hover from '../components/hover.jsx';

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
          <Hover imageName='javascript-icon.png' delay='850ms' techName='Javascript' />
          <Hover imageName='ruby-icon.png' delay='800ms' techName='Ruby' />
          <Hover imageName='rails-icon.png' delay='750ms' techName='Rails' />
          <Hover imageName='html-icon.png' delay='700ms' techName='HTML5' />
          <Hover imageName='css-icon.png' delay='650ms' techName='CSS3' />
          <Hover imageName='nodejs-icon.png' delay='600ms' techName='NodeJS' />
          <Hover imageName='react-icon.png' delay='550ms' techName='ReactJS' />
          <Hover imageName='postgresql.png' delay='500ms' techName='PostgreSQL' />
        </div>

        <ScrollToNextSection sectionSelector='.contact-page' />
      </div>
    );
  }
}

export default Technologies
