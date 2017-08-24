import React, { Component } from 'react';
import LearnMore from './LearnMore';

export class HealthFidelityLearnMore extends Component {
  render() {
    return (
      <LearnMore
        {...this.props}
      >
        Hey I was at Health Fidelity!
      </LearnMore>
    );
  }
}
export default HealthFidelityLearnMore;

