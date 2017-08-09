import * as React from "react";
import { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div id={this.props.id || ""} className={`${this.props.moreClassName || ""}`}>
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

