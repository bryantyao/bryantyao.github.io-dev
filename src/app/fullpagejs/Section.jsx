import React, { Component } from "react";

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  beforeEnter() {
    const onEntering = this.props.onEntering;

    if(this._isValidTransition(onEntering)) {
      this.setState({ transition: onEntering });
    }
  }

  onEnter() {
    const onEnter = this.props.onEnter;

    if(this._isValidTransition(onEnter)) {
      this.setState({ transition: onEnter });
    }
  }

  onLeave() {
    const onLeave = this.props.onLeave;

    if(this._isValidTransition(onLeave)) {
      this.setState({ transition: onLeave });
    }
  }

  render() {
    const { className, onEntering, onEnter, onLeave, ...other } = this.props;

    const child = React.Children.only(this.props.children);
    const childWithTransition = React.cloneElement(child, {
      className: this.state.transition || ''
    });

    return(
      <div className={`section ${className || ''}`} {...other}>
        {childWithTransition}
      </div>
    );
  }

  //private
  
  _isValidTransition(transition) {
    return transition !== null && transition != undefined && typeof transition === 'string';
  }
}
export default Section;

