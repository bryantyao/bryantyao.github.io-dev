import React, { Component } from 'react';
import { About, Experience, Home, Social } from 'app/pages';
import { grey } from 'material-ui/colors';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { introComplete: false };
    this._introComplete = this._introComplete.bind(this);
  }
  
  render() {
    const { introComplete } = this.state;
    const showOrHideSocial = introComplete ? 'animated-500 animated-delay-1100 fade-in' : 'd-none';
    const showOrHideMainContent = introComplete ? 'animated-delay-200 flex-grow' : 'd-none';

    return (
      <div className='app'>
        <div className='row m-0 min-height-100'>
          <div className={`col d-flex flex-column justify-content-center p-0`}>
            <Home
              className='my-5'
              onAnimateComplete={this._introComplete}
              typing_interval={75}
            />
            <Social className={showOrHideSocial}/>
          </div>
          {
            introComplete && 
            <div className={`col d-flex flex-column px-3 pt-3 ${showOrHideMainContent}`} style={{ 'color': 'black', 'background-color': grey[50] }}>
              <About className=' mb-4' />
              <Experience />
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

