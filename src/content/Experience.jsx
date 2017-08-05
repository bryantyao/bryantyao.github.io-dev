import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
    render() {
        return (
          <div className={`${this.props.moreClassName || ""}`}>
            <h1>Skills</h1>
            <h1>Work</h1>
            <h2>Health Fidelity</h2>
            <h2>IBM</h2>
          </div>
        );
  }
}

