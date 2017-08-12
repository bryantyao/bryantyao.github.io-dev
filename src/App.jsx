import * as React from "react";
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Experience, About } from './content/content.js';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import NavLink from './NavLink.jsx';

export default class App extends Component {
  static get ROUTES() {
    return [
      { id: 'home',
        path: '/',
        exact: true,
        name: "home()",
        component: Home
      },
      { id: 'experience',
        path: '/experience',
        exact: true,
        name: "experience()",
        component: Experience
      },
      { id: 'about',
        path: '/about',
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
          <Navbar>
            {App.ROUTES.map((route, index) => (
                <NavLink key={index} to={route.path}>{route.name}</NavLink>
            ))}
          </Navbar>
          <Content routes={App.ROUTES}/>
        </div>
      </Router>
    );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

