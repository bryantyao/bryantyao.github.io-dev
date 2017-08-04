import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Tether from 'tether';
import App from './App.jsx';
window.$ = window.jQuery = jQuery;
window.Tether = Tether;

require('bootstrap');
require('./css/index.css');

ReactDOM.render(
  <App />, document.getElementById('root'));

