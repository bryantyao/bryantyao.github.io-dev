import * as React from "react";
import { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Experience, About } from './content/content.js';

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
        {<Header routes={App.ROUTES}/>}
          <Content routes={App.ROUTES}/>
        </div>
      </Router>
    );
  }
}

