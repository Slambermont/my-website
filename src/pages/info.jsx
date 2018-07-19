import React, { Component } from 'react';
import Header from '../components/header.jsx';
import NavBar from '../components/navBar.jsx';
import About from './about.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import Technologies from './technologies.jsx'

class Info extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <About />
        <Skills />
        <Technologies />
        <Contact />
      </div>
    );
  }
}

export default Info
