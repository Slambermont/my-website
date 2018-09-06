import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hover extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div>
          { this.state.isHovering ?
            <div onMouseLeave={this.handleMouseHover}>
              {this.props.techName}
            </div>
          :
            <div onMouseEnter={this.handleMouseHover}>
              <img className='wow fadeInLeft'
                data-wow-delay={this.props.delay}
                src={this.props.imageName}/>
            </div>
          }
        </div>
      </div>
    )
  }
}

Hover.propTypes = {
  imageName: PropTypes.string,
  delay: PropTypes.string,
  techName: PropTypes.string,
}

export default Hover
