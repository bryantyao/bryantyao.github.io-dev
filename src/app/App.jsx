import React, { Component } from 'react';
import { About, Experience, Home, Social } from './pages.js';
import { FullPage, FadeInSection } from './fullpage.js';
import { IBMLogo } from './svg.jsx';

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
    const anchors = App.ROUTES.map(route => route.anchor);

    return {
      anchors: anchors,
      css3: true,
      scrollingSpeed: 1000
    };
  }

  render() {
    const components = App.ROUTES.map((route, index) => (
      <FadeInSection component={route.component} />
    ));

    return (
      <FullPage className="app d-flex flex-column" options={App.FULL_PAGE_OPTIONS}>
        {components}
      </FullPage>
    );
  }
}

