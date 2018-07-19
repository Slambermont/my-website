import React, { Component } from 'react';
import '../css/pages/contact.css';
import ScrollTop from '../components/scrollTop.jsx'
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx'

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <ScrollToPreviousSection sectionSelector='.skills-page' />
        <div className='contact-skewed'>
          <div className='contact-content'>
            <div className='wow slideInRight contact-title'>
              <div className='decorative-line-dark'></div>
              <h2>CONTACT ME</h2>
              <div className='decorative-line-dark'></div>
            </div>

            <div className='media'>
              <a className='wow flipInX media-link' data-wow-delay='200ms' href='https://github.com/Slambermont/CV'>
                <span>See my work on GitHub</span>
                <img src='github-icon.png'/>
              </a>
              <a className='wow flipInX media-link' data-wow-delay='400ms' href='mailto:salome.lambermont@gmail.com'>
                <span>Send me an email</span>
                <img src='email-icon.png'/>
              </a>
              <a className='wow flipInX media-link' data-wow-delay='600ms' href='https://www.linkedin.com/in/salom%C3%A9-lambermont-30a62410b/'>
                <span>Find me on Linkedin</span>
                <img src='linkedin-icon.png'/>
              </a>
            </div>
          </div>
        </div>
        <ScrollTop />
      </div>
    );
  }
}

export default Contact
