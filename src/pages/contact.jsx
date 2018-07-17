import React, { Component } from 'react';
import '../css/pages/contact.css';
import ScrollTop from '../components/scrollTop.jsx'
import ScrollToSection from '../components/scrollToSection.jsx'

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <ScrollToSection sectionSelector='.skills-page' />
        <h2>This is my CONTACT page</h2>
        <ScrollTop />
      </div>
    );
  }
}

export default Contact
