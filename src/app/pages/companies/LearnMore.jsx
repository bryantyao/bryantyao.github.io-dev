import React, { Component } from 'react';

export class LearnMore extends Component {
  render() {
    const { children, className, title, ...other } = this.props;

    return (
      <div className={`learnMore d-flex flex-column align-items-center overflow-y-auto ${className || ''}`} {...other}>
        <h1 className="mb-4">{title}</h1>
        <div className="content mx-4 mb-4">
          {children}
        </div>
      </div>
    );
  }
}
export default LearnMore;

