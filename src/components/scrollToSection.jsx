import React, { Component } from 'react';
import { toElement as scrollToElement } from './scroll.jsx';
import PropTypes from 'prop-types';

class ScrollToSection extends Component {
  scrollToPage(sectionSelector) {
    const targetSection = document.querySelector(sectionSelector);
    scrollToElement(targetSection);
  }

  render() {
    return (
      <div onClick={() => this.scrollToPage(this.props.sectionSelector)}>Scroll</div>
    )
  }
}

ScrollToSection.propTypes = {
  sectionSelector: PropTypes.string
}

export default ScrollToSection
