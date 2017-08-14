import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Popper from 'popper.js';
import App from './app/App.jsx';
import AOS from 'aos';
import hljs from 'highlight.js';
window.$ = window.jQuery = jQuery;
window.Popper = Popper;

// Import CSS from Libraries
require('bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/aos/dist/aos.css');
require('./css/index.css');

// Initialize any JS Libraries
hljs.initHighlightingOnLoad();
AOS.init({
  duration: 1200,
  easing: 'ease-out-sine'
})


ReactDOM.render(
  <App />, document.getElementById('root'));

