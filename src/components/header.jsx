import React, { Component } from 'react';
import '../css/components/header.css';
import Menu from './menu.jsx';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='wow fadeInLeft' data-wow-delay='1s'><span>S A L O M É</span> L A M B E R M O N T</h1>
        <div className='hidden-menu'>
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header
