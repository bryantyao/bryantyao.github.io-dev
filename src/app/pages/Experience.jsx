import React, { Component } from 'react';
import Card from '../Card.jsx';
import Page from './layouts/Page.jsx';
import { IBMLogo } from '../svg.jsx';

export class Experience extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`experience ${className || ''}`} {...other} title='bryant_yao.experience'>
        <div className='d-flex justify-content-center w-75 h-100'>
          <div className="card-deck mb-5">
            <div className="card text-white bg-dark">
              <h2 className="card-header">IBM</h2>
              <div className="card-body h-100 m-auto">
                <IBMLogo />
              </div>
              <div className="card-footer text-center">
                <a href="#" class="btn btn-primary">View</a>
              </div>
            </div>
            <div className="card text-white bg-dark">
              <h2 className="card-header">Health Fidelity</h2>
              <div className="card-body">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer text-center">
                <a href="#" class="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
export default Experience;

