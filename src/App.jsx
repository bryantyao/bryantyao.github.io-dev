import * as React from "react";
import { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Experience, About } from './content/content.js';

export default class App extends Component {
    static get ROUTES() {
      return [
          { path: '/',
            exact: true,
            name: "Home",
            component: Home
          },
          { path: '/experience',
            exact: true,
            name: "Experience",
            component: Experience
          },
          { path: '/about',
            exact: true,
            name: "About",
            component: About
          }
        ];
    }

    render() {
        return (
            <Router>
              <div id="app" className="app">
                <Header moreClassName="fixed-top" routes={App.ROUTES}/>
                <Content routes={App.ROUTES}/>
              </div>
            </Router>
        );
    }
}

