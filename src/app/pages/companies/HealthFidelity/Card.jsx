import React, { Component } from 'react';
import CompanyCard from 'app/pages/companies/CompanyCard';
import LearnMore from './LearnMore';

export class HealthFidelity extends Component {
  render() {
    return (
      <CompanyCard
        company='Health Fidelity'
        learn_more={LearnMore}
        skills={[
          'Chef',
          'Bootstrap',
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

