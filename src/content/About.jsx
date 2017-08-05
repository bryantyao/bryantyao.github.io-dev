import * as React from "react";
import { Component } from 'react';

export class About extends Component {
    render() {
        return (
          <div className={`${this.props.moreClassName || ""}`}>
            <div>Resume: <a href="#"></a></div>
            <div>LinkedIn: <a href="#"></a></div>
            <div>GitHub: <a href="#"></a></div>
          </div>
        );
  }
}

