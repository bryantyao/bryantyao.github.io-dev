import React, { Component } from 'react';
import Resume from 'app/pages/Resume';
import Page from 'app/pages/layouts/Page';
import { HealthFidelity, IBM } from 'app/pages/companies';

export class Experience extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`experience ${className || ''}`} {...other} title='Experience'>
        <div>
          <Resume className='mb-3' />
          <HealthFidelity className="mb-3" />
          <IBM />
        </div>
      </Page>
    );
  }
}
export default Experience;

