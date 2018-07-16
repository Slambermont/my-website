import React, { Component } from 'react';
import About from './about.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';

class Info extends Component {
  render() {
    return (
      <div>
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default Info
