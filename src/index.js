import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Popper from 'popper.js';
import App from 'app/App.jsx';
import hljs from 'highlight.js';
// bootstrap requires a global jQuery and Popper to initialize
window.$ = window.jQuery = jQuery;
window.Popper = Popper;
require('bootstrap');

// Initialize any JS Libraries
hljs.initHighlightingOnLoad();

// Import CSS
require('css/index.css');

ReactDOM.render(
  <App />, document.getElementById('root'));

