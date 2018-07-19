import React, { Component } from 'react';
import '../css/pages/about.css';
import ScrollToNextSection from '../components/scrollToNextSection.jsx'
import WOW from "wowjs";

class About extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className='about-page'>
        <div className='about-content'>
          <div className='image-container'>
            <img className='background-image' src='blackandwhite.jpg' alt='salome'/>
          </div>
          
          <div className='about-skewed'>
            <div className="about-content-text">
              <div className='decorative-line-dark'></div>
              <h2 className='wow slideInRight' data-wow-delay='900ms'>Who dis</h2>
              <p className='wow slideInRight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <div className='decorative-line-dark'></div>
            </div>
          </div>
        </div>
        <ScrollToNextSection sectionSelector='.skills-page' />
      </div>
    );
  }
}

export default About
