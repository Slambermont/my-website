import React, { Component } from 'react';
import NavBar from '../components/navBar.jsx';
import About from './about.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import ScrollTop from '../components/scrollTop.jsx'

class Info extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Skills />
        <Contact />
        <ScrollTop />
      </div>
    );
  }
}

export default Info
