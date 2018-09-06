import React, { Component } from 'react';
import '../css/components/menu.css';
import { toElement as scrollToElement } from './scroll.jsx';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    });
  }

  closeMenu() {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu)
    });
  }

  scrollToPage(sectionSelector) {
    const targetSection = document.querySelector(sectionSelector);
    scrollToElement(targetSection);
  }

  render() {
    return (
      <div className='menu-container'>
        <img src='menu-icon.png' onClick={this.showMenu} />

      {
        this.state.showMenu
          ? (
            <div className="menu">
              <a onClick={() => this.scrollToPage('.about-page')}>A B O U T</a>
              <a onClick={() => this.scrollToPage('.skills-page')}>S K I L L S</a>
              <a onClick={() => this.scrollToPage('.technologies-page')}>T E C H N O L O G I E S</a>
              <a onClick={() => this.scrollToPage('.contact-page')}>C O N T A C T</a>
            </div>
          )
          : (
            null
          )
        }
      </div>
    );
  }
}

export default Menu
