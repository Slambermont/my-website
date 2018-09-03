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
        <div className='wow fadeIn image-container'>
          <img className='background-image' src='blackandwhite.jpg' alt='salome'/>
        </div>

        <div className='about-skewed'>
          <div className="about-content-text">
            <div className='decorative-line-dark'></div>
            <h2 className='wow slideInRight'>Who I am</h2>
            <p className='wow slideInRight'>I am a Junior Developer with a passion for front end technologies. I graduated from Makers Academy, a 16 week coding bootcamp, in July 2018. I am currenty looking for an opportunity to kickstart my career in a London-based digital agency.</p>
            <div className='decorative-line-dark'></div>
          </div>
        </div>

        <ScrollToNextSection sectionSelector='.skills-page' />
      </div>
    );
  }
}

export default About
