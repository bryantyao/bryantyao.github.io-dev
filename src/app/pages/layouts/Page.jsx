import * as React from "react";
import { Component } from 'react';

export class Page extends Component {
  render() {
    const { id, moreClassName, title, children, ...other } = this.props;
    return (
      <div id={id || ""} className={`d-flex flex-column align-items-center h-100 w-100 pt-4 ${moreClassName || ""}`} {...other}>
        <div className="display-4 font-weight-bold mb-4">{title}</div>
        <div className="d-flex flex-column align-items-center w-50">
          {children}
        </div>
      </div>
    );
  }
}
export default Page;

