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
          <div className="card-deck d-flex justify-content-evenly w-100 mb-5">
            <Card className='text-white ibm'>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <IBMLogo height={'5rem'}/>
              </div>
            </Card>
            <Card className='text-white health-fidelity'>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <img className="card-img-top" src="/health_fidelity.png" alt="Health Fidelity" />
              </div>
            </Card>
          </div>
        </div>
      </Page>
    );
  }
}
export default Experience;

