import * as React from "react";
import { Component } from 'react';

export class Social extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <div className={`social d-flex justify-content-center align-items-center h-100 ${className || ""}`} {...other}>
        <div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div>Follow me on</div>
          <div className="linkContainer">
            <a href="https://linkedin.com/in/bryant-yao-298aa722">LinkedIn</a>
            <a href="https://github.com/bryantyao">GitHub</a>
            <a href="https://untappd.com/user/bryantyao">Untappd</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Social;

