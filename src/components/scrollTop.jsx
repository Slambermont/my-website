import React, { Component } from 'react';
import '../css/components/scroll.css';
import { toTop as scrollToPageTop } from './scroll.jsx'

class ScrollTop extends Component {
  render() {
    return (
      <div className='scrollToTop-button' onClick={() => scrollToPageTop()}>
        <img className='wow flash' data-wow-duration='3s' src='up-chevron.png' alt='Scroll Up'/>
      </div>
    );
  }
}

export default ScrollTop
