import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Popper from 'popper.js';
import App from 'app/App.jsx';
import 'app/css/index.css';
// bootstrap requires a global jQuery and Popper to initialize
window.$ = window.jQuery = jQuery;
window.Popper = Popper;
require('bootstrap');

ReactDOM.render(
  <App />, document.getElementById('root'));

