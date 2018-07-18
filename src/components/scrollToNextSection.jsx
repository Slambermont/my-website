import React, { Component } from 'react';
import { toElement as scrollToElement } from './scroll.jsx';
import PropTypes from 'prop-types';

class ScrollToNextSection extends Component {
  scrollToPage(sectionSelector) {
    const targetSection = document.querySelector(sectionSelector);
    scrollToElement(targetSection);
  }

  render() {
    return (
      <div className='scrollToNext-button' onClick={() => this.scrollToPage(this.props.sectionSelector)}>
        <img className='wow flash' data-wow-duration='3s' src='down-chevron.png' alt='Scroll Down'/>
      </div>
    )
  }
}

ScrollToNextSection.propTypes = {
  sectionSelector: PropTypes.string
}

export default ScrollToNextSection
