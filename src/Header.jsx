import * as React from "react";
import { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    var routes = this.props.routes || [];

    return (
      <nav className={`navbar flex-row navbar-toggleable-md navbar-light bg-faded ${this.props.moreClassName || ""}`}>
          <div className="navbar-nav flex-row">
            {routes.map((route, index) => (
              <span key={index} className="nav-item">
                <NavLink activeClassName="active" isActive={this._isActive.bind(route)} className="nav-link" to={route.path}>{route.name}</NavLink>
              </span>
            ))}
          </div>
      </nav>
    );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

