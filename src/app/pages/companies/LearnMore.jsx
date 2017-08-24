import React, { Component } from 'react';

export class LearnMore extends Component {
  render() {
    const { children, className, title, ...other } = this.props;

    return (
      <div className={`w-100 h-100 ${className || ''}`} {...other}>
        <h1 className="mb-4 text-center">{title}</h1>
        {children}
      </div>
    );
  }
}
export default LearnMore;

