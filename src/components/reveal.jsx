import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reveal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
    };
  }

  handleClick() {
    this.setState(this.toggleRevealState);
  }

  toggleRevealState(state) {
    return {
      isClicked: !state.isClicked,
    };
  }

  render() {
    return (
      <div>
        { this.state.isClicked ?
          <div onClick={this.handleClick}
            className="hidden-techname">
            <div>{this.props.techName}</div>
          </div>
        :
          <img className='wow fadeInLeft'
            data-wow-delay={this.props.delay}
            src={this.props.imageName}
            onClick={this.handleClick}/>
        }
      </div>
    )
  }
}

Reveal.propTypes = {
  imageName: PropTypes.string,
  delay: PropTypes.string,
  techName: PropTypes.string,
}

export default Reveal
