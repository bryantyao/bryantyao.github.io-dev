import React, { Component } from 'react';

export class LearnMore extends Component {
  render() {
    const { children, className, title, ...other } = this.props;

    return (
      <div className={`learnMore d-flex flex-column align-items-center ${className || ''}`} {...other}>
        <h1 className="mb-4">{title}</h1>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}
export default LearnMore;

