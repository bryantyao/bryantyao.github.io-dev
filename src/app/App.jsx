import React, { Component } from 'react';
import { About, Experience, Home, Resume, Social } from 'app/pages.js';
import { AppBar } from 'app/nav';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { blue, cyan, grey } from 'material-ui/colors';

export default class App extends Component {
  static get COMPONENTS() {
    return [ Home,
             About,
             Experience,
             Social ];
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    const components = App.COMPONENTS.map((Component, i) => (<Component key={i} style={{height: '90%'}} />));
    return (
      <div className="app">
        <div className="row m-0" style={{ 'min-height': '100%' }}>
          <div className="col-12 col-xl-6 d-flex flex-column justify-content-center p-0">
            <Home className='my-5'/>
            <Social className=""/>
          </div>
          <div className="col-12 col-xl-6 d-flex flex-column pr-0 py-3" style={{ 'color': 'black', 'background-color': grey[50] }}>
            <About className=" mb-4" />
            <Resume className=" mb-4" />
            <Experience className="" />
          </div>
        </div>
      </div>
    );
  }
}

