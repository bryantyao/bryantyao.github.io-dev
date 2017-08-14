import * as React from "react";
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { About, Experience, Home, Social } from './pages.js';
import { Navbar, NavLink } from './nav.js';
import { FullPage, Section } from './fullpagejs/fullpage.js';
import $ from 'jquery'

export default class App extends Component {
  static get ROUTES() {
    return [
      { path: '/',
        anchor:'home',
        exact: true,
        name: "home()",
        component: Home
      },
      { path: '/about',
        anchor:'about',
        exact: true,
        name: "about()",
        component: About
      },
      { path: '/experience',
        anchor:'experience',
        exact: true,
        name: "experience()",
        component: Experience
      },
      { path: '/social',
        anchor:'social',
        exact: true,
        name: "social()",
        component: Social
      }
    ];
  }

  static get FULL_PAGE_OPTIONS() {
    const anchors = App.ROUTES.map((route)=>(route.anchor));
    return {
      anchors: anchors,
      css3: true,
      scrollingSpeed: 1000,
      afterLoad: (anchor, index) => {
        /*console.log(`Loaded: ${anchor} ${index}`);
        $(`div[data-anchor='${anchor}']`).addClass('animated fadeIn');*/
      },
      onLeave: (index, nextIndex, direction) => {
        /*let anchor = anchors[index];
        console.log(`Leaving: ${anchor} ${index}`);
        $(`div[data-anchor='${anchor}']`).removeClass('animated fadeIn');*/
      }
    };
  }

  render() {
    const components = App.ROUTES.map((route, index) => {
      const Component = route.component;
      return (
        <Section key={index} onEnter="fadeIn">
          <Component/>
        </Section>
      );
    });

    /*
        <div id="content" className="content">
        </div>
     */
    return (
      <FullPage className="app d-flex flex-column" {...App.FULL_PAGE_OPTIONS}>
        {components}
      </FullPage>
    );
  }
}

