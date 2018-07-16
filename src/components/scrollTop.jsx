import React, { Component } from 'react';
import '../css/components/scroll.css';
import { toTop as scrollToPageTop } from './scroll.jsx'

class ScrollTop extends Component {
  render() {
    return (
      <div className='scroll-top' onClick={() => scrollToPageTop()}>Scroll to top</div>
    );
  }
}

export default ScrollTop
