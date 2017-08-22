import React, { Component } from 'react';

export class Page extends Component {
  render() {
    const { title, children, ...other } = this.props;
    return (
      <div {...other}>
        <h1 className="mb-4">{title}</h1>
        {children}
      </div>
    );
  }
}
export default Page;

