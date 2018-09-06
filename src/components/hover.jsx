import React, { Component } from 'react';

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
              HOVERING
            </div>
          :
            <div onMouseEnter={this.handleMouseHover}>
              Not hovering
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Hover
