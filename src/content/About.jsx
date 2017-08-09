import * as React from "react";
import { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div id={this.props.id || ""} className={`${this.props.moreClassName || ""}`}>
        <div>Resume: <a href="#"></a></div>
        <div>LinkedIn: <a href="#"></a></div>
        <div>GitHub: <a href="#"></a></div>
      </div>
    );
  }
}

