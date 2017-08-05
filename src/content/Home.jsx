import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
    render() {
        return (
          <div className={`${this.props.moreClassName || ""}`}>
            Hey, I'm Bryant Yao and I'm a software engineer.
          </div>
        );
  }
}

