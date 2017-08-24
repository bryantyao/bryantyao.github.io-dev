import React, { Component } from 'react';
import { About, Experience, Home, Social } from 'app/pages';
import { grey } from 'material-ui/colors';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { introComplete: this._introHasPlayed() };
    this._introComplete = this._introComplete.bind(this);
  }
  
  render() {
    const { introComplete } = this.state;
    const showOrHideSocial = introComplete ? 'animated-500 animated-delay-1100 fade-in' : 'd-none';
    const showOrHideMainContent = introComplete ? 'animated-delay-200 flex-grow' : 'd-none';
    const typingInterval = introComplete ? 0 : 75;

    return (
      <div className='app'>
        <div className='row m-0 min-height-100'>
          <div className={`intro col d-flex flex-column justify-content-center p-0`}>
            <Home
              className='my-5'
              onAnimateComplete={this._introComplete}
              typing_interval={typingInterval}
            />
            <Social className={showOrHideSocial}/>
          </div>
          {
            introComplete && 
            <div className={`col ${showOrHideMainContent}`} style={{ 'color': 'black', backgroundColor: grey[50] }}>
              <div className="d-flex flex-column m-3">
                <About className=' mb-4' />
                <Experience />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

  //private
  
  _introHasPlayed() {
    return window.localStorage.getItem('intro_played') === 'true';
  }
    
  _introComplete() {
    window.localStorage.setItem('intro_played', 'true');
    this.setState({ introComplete: true });
  }
}

