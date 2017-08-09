import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div id={this.props.id || ""} className={`home ${this.props.moreClassName || ""}`}>
        <h2>Hey, I'm Bryant Yao and...</h2>
      </div>
    );
  }
}

