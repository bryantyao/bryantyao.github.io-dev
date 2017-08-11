import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Popper from 'popper.js';
import App from './App.jsx';
window.$ = window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('./css/index.css');

ReactDOM.render(
  <App />, document.getElementById('root'));

