import React, { Component } from 'react';
import CompanyCard from 'app/pages/companies/CompanyCard';
import LearnMore from 'app/pages/companies/IBM/LearnMore';

export class IBM extends Component {
  render() {
    return (
      <CompanyCard
        company='IBM'
        learn_more={LearnMore}
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

