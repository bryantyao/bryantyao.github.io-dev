import React, { Component } from 'react';
import CompanyCard from 'app/pages/companies/CompanyCard';

export class IBM extends Component {
  render() {
    return (
      <CompanyCard
        company='IBM'
        description='IBM blurb'
        skills={[
          'Apache Derby',
          'Dojo Toolkit',
          'Equinox OSGi',
          'Java',
          'WAS Liberty'
        ]}
        year_start={2012}
        year_end={2014}
        {...this.props}
      />
    );
  }
}
export default IBM;

