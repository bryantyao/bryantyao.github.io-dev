import * as React from "react";
import { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        var routes = this.props.routes || [];

        return (
          <nav className={`navbar navbar-toggleable-md navbar-light bg-faded ${this.props.moreClassName || ""}`}>
            <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto justify-content-end">
                {routes.map((route, index) => (
                  <li key={index} className="nav-item">
                    <NavLink activeClassName="active" isActive={this._isActive.bind(route)} className="nav-link" to={route.path}>{route.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

