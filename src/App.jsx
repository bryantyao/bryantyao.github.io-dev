import * as React from "react";
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Experience, About } from './app/pages.js';
import { Navbar, NavLink } from './app/nav.js';

export default class App extends Component {
  static get ROUTES() {
    return [
      { path: '/',
        exact: true,
        name: "home()",
        component: Home
      },
      { path: '/experience',
        exact: true,
        name: "experience()",
        component: Experience
      },
      { path: '/about',
        exact: true,
        name: "about()",
        component: About
      }
    ];
  }

  render() {
    return (
      <Router>
        <div id="app" className="app d-flex flex-column">
          <div className="content">
            <Home/>
            <Experience/>
            <About/>
          </div>
        </div>
      </Router>
    );
  }
}

