import React, { Component } from 'react';
import '../css/pages/contact.css';
import ScrollTop from '../components/scrollTop.jsx'
import ScrollToPreviousSection from '../components/scrollToPreviousSection.jsx'

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <ScrollToPreviousSection sectionSelector='.skills-page' />
        <h2>This is my CONTACT page</h2>
        <ScrollTop />
      </div>
    );
  }
}

export default Contact
