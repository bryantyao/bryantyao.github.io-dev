import * as React from "react";
import { Component } from 'react';
import { Route } from 'react-router-dom'

export default class Content extends Component {
    render() {
        var routes = this.props.routes || [];

        return (
            <div className={`content ${this.props.moreClassName || ""}`}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
        );
    }
}

