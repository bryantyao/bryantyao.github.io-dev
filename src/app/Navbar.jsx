import * as React from "react";
import { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className={`header code d-flex flex-row justify-content-end ${this.props.moreClassName || ""}`}>
          {this.props.children}
      </nav>
    );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

