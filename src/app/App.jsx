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
    this.state = { introComplete: false };
    this._introComplete = this._introComplete.bind(this);
  }
  
  render() {
    const components = App.COMPONENTS.map((Component, i) => (<Component key={i} style={{height: '90%'}} />));
    const showOrHide = this.state.introComplete ? 'animated animated-delay-1100 fadeIn' : 'd-none';

    return (
      <div className="app">
        <div className="row m-0" style={{ 'min-height': '100%' }}>
          <div className={`col d-flex flex-column justify-content-center p-0`}>
            <Home
              className='my-5'
              onAnimateComplete={this._introComplete}
              typing_interval={75}
            />
            <Social className={showOrHide}/>
          </div>
          {
            this.state.introComplete && 
            <div className={`col d-flex flex-column pr-0 py-3 ${this.state.introComplete ? 'animated-delay-200 flexGrow' : 'd-none'}`} style={{ 'color': 'black', 'background-color': grey[50] }}>
              <About className=" mb-4" />
              <Resume className=" mb-4" />
              <Experience className="" />
            </div>
          }
        </div>
      </div>
    );
  }

  //private
    
  _introComplete() {
    this.setState({ introComplete: true });
  }
}

