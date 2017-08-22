import React, { Component } from 'react';
import { About, Experience, Home, Social } from 'app/pages.js';
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
    return (
      <div className="app">
        <div className="row p-3 h-100 w-100">
          <div className="col centered h-100 flex-column">
            <Home className='mb-5 pb-5'/>
            <Social className="centered flex-column"/>
          </div>
          <div className="col row flex-column pr-0">
            <Card className='about-card col mb-3' raised={true} style={{ 'background-color': blue[600] }}>
              <CardContent className="h-100">
                <About />
              </CardContent>
            </Card>
            <Card className='experience-card col' raised={true} style={{ 'background-color': cyan[600] }}>
              <CardContent className="h-100">
                <Experience />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

