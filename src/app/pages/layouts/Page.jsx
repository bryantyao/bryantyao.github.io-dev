import * as React from "react";
import { Component } from 'react';

export class Page extends Component {
  render() {
    const { className, title, children, ...other } = this.props;
    return (
      <div className={`d-flex flex-column align-items-center h-100 w-100 pt-4 ${className || ""}`} {...other}>
        <div className="display-3 mb-4">{title}</div>
        {children}
      </div>
    );
  }
}
export default Page;

