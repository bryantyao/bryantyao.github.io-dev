import React, { Component } from 'react';
import CompanyCard from 'app/pages/companies/CompanyCard';
import HealthFidelityLearnMore from 'app/pages/companies/HealthFidelityLearnMore';

export class HealthFidelity extends Component {
  render() {
    return (
      <CompanyCard
        company='Health Fidelity'
        learn_more={HealthFidelityLearnMore}
        skills={[
          'Chef',
          'Jenkins',
          'jQuery',
          'MySQL',
          'Ruby',
          'Ruby on Rails'
        ]}
        year_start={2014}
        year_end={2016}
        {...this.props}
      />
    );
  }
}
export default HealthFidelity;

