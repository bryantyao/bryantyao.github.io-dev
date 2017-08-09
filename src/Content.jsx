import * as React from "react";
import { Component } from 'react';
import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

export default class Content extends Component {
  render() {
    var routes = this.props.routes || [];
    return (
      <div className={`content ${this.props.moreClassName || ""}`}>
        {routes.map((route) => (
          React.createElement(route.component, { key: route.id, id: route.id })
        ))}
      </div>
    );
  }
}

