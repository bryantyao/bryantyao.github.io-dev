import React, { Component } from 'react';
import LearnMore from 'app/pages/companies/LearnMore';

export class HealthFidelityLearnMore extends Component {
  render() {
    return (
      <LearnMore
        {...this.props}
      >
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <p>
              At Health Fidelity, I was a full-stack software engineer on HCC Scout, a risk adjustment SaaS solution which provided a workflow for medical coders to review and code medical records.
            </p>
          </div>
        </div>
      </LearnMore>
    );
  }
}
export default HealthFidelityLearnMore;

