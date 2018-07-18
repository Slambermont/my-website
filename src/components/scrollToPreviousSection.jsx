import React, { Component } from 'react';
import { toElement as scrollToElement } from './scroll.jsx';
import PropTypes from 'prop-types';
import '../css/components/scroll.css'

class ScrollToPreviousSection extends Component {
  scrollToPage(sectionSelector) {
    const targetSection = document.querySelector(sectionSelector);
    scrollToElement(targetSection);
  }

  render() {
    return (
      <div className='scrollToPrevious-button' onClick={() => this.scrollToPage(this.props.sectionSelector)}>
        <img className='wow bounce' data-wow-duration='3s' src='up-chevron.png' alt='Scroll Up'/>
      </div>
    )
  }
}

ScrollToPreviousSection.propTypes = {
  sectionSelector: PropTypes.string
}

export default ScrollToPreviousSection
