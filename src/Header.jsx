import * as React from "react";
import { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    var routes = this.props.routes || [];

    return (
      <nav className={`header code d-flex flex-row justify-content-end ${this.props.moreClassName || ""}`}>
          {routes.map((route, index) => (
            <span key={index} className="nav-item">
              <NavLink activeClassName="active" isActive={this._isActive.bind(route)} className="nav-link" to={route.path}>{route.name}</NavLink>
            </span>
          ))}
      </nav>
    );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

