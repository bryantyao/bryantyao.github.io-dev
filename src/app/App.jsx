import * as React from "react";
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { About, Experience, Home, Social } from './pages.js';
import { Navbar, NavLink } from './nav.js';
import $ from 'jquery'

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

  /*constructor(props) {
    super(props);
    this._boundScrollWithAnimationFrame = this.scrollWithAnimationFrame.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this._boundScrollWithAnimationFrame);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._boundScrollWithAnimationFrame);
  }

  scrollWithAnimationFrame(evt) {
    $('html, body').animate({
      scrollTop: $("#experience").offset().top
    }, 2000);
    evt.preventDefault();
  }*/
  /*componentDidMount() {
    const body = document.body;
    const scrollHeight = body.scrollHeight;

    const myself = ReactDOM.findDOMNode(this.refs.app);
    myself.setAttribute("style", "overflow: hidden");

    body.setAttribute("style", `height: ${scrollHeight}px`);
  }*/

  /*componentDidMount() {
    const myself = ReactDOM.findDOMNode(this.refs.app);
    myself.setAttribute("style", "overflow: hidden");

    (function(node) {
      const nav = ["#home", "#about", "#experience", "#social"];
      var getIndex = function() {
        let index = nav.indexOf(window.location.hash);
        return (index < 0 ) ? 0 : index;
      }

      let _ticking = false;
      $(node).on('mousedown', (e) => {
        if(!_ticking) {
          const currentIndex = getIndex();
          const nextNav = nav[currentIndex+1];
          console.log(`${currentIndex} | Next Nav: ${nextNav}`);
          window.location.href = `/${nextNav}`;
          _ticking = true;
        }
      });
    }(myself));
  }*/

  render() {
    return (
      <div id="app" ref="app" className="app d-flex flex-column">
        <div className="content">
          <Home data-aos="fade-in"/>
          <About data-aos="fade-in"/>
          <Experience data-aos="fade-in"/>
          <Social/>
        </div>
      </div>
    );
  }
}

