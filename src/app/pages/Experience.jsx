import React, { Component } from 'react';
import Page from 'app/pages/layouts/Page.jsx';
import { IBMLogo } from 'app/svg.jsx';
import Chip from 'material-ui/Chip';

export class Experience extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`experience w-100 ${className || ''}`} {...other} title='Experience'>
        <div>
          <h2 className="mb-3">Health Fidelity (2014-2016)</h2>
          <div className="skills d-flex flex-wrap mb-3">
            <Chip label="Chef" />
            <Chip label="Jenkins" />
            <Chip label="jQuery" />
            <Chip label="MySQL" />
            <Chip label="Ruby" />
            <Chip label="Ruby on Rails" />
          </div>
          <p>Health Fidelity blurb</p>
        </div>
        <div>
          <h2>IBM (2012-2014)</h2>
          <div className="skills d-flex flex-wrap mb-3">
            <Chip label="Apache Derby" />
            <Chip label="Dojo Toolkit" />
            <Chip label="Equinox OSGi" />
            <Chip label="Java" />
            <Chip label="WAS Liberty" />
          </div>
          <p>IBM blurb</p>
        </div>
      </Page>
    );
  }
}
export default Experience;

