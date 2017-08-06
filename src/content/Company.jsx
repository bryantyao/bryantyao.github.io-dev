import * as React from "react";
import { Component } from "react";

export class Company extends Component {
  render() {
    return (
      <div className={`company ${this.props.moreClassName || ""}`}>
        <div>${}</div>
      </div>
    );
  }
}

