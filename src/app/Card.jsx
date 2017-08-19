import * as React from "react";
import { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { displayOverlay: false };
  }

  render() {
    const { className, children } = this.props;
    const childClassName = this.state.displayOverlay ? 'opacity-0.5' : '';
    const overlayClassName = this.state.displayOverlay ? 'displayOverlay' : '';

    return (
      <div
        className={`card ${className || ''} ${overlayClassName}`}
        onMouseEnter={this._displayOverlay.bind(this)}
        onMouseLeave={this._hideOverlay.bind(this)}
      >
        <div className="card-body h-100 w-100">
          {children}
        </div>
        <div className={`viewCardOverlay display-3 justify-content-center align-items-center h-100 w-100`}>
          <div>View</div>
        </div>
      </div>
    );
  }

  //private
  
  _displayOverlay() {
    this.setState({ displayOverlay: true });
  }

  _hideOverlay() {
    this.setState({ displayOverlay: false });
  }

}
export default Card;

