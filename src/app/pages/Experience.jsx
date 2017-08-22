import React, { Component } from 'react';
import Card from 'app/Card.jsx';
import Page from 'app/pages/layouts/Page.jsx';
import { IBMLogo } from 'app/svg.jsx';

export class Experience extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`experience h-100 ${className || ''}`} {...other} title='Experience'>
        <div className='d-flex align-items-center h-75 w-100' style={{ 'margin-left': '-2rem' }} >
          <IBMLogo height={'5rem'}/>
          <img className="card-img-top" src="/health_fidelity.png" alt="Health Fidelity" />
        </div>
      </Page>
    );
  }
}
export default Experience;

