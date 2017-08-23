import React, { Component } from 'react';
import CompanyCard from 'app/pages/companies/CompanyCard';

export class HealthFidelity extends Component {
  render() {
    return (
      <CompanyCard
        company='Health Fidelity'
        description='Health Fidelity blurb'
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

