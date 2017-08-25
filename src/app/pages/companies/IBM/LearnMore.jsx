import React, { Component } from 'react';
import LearnMore from 'app/pages/companies/LearnMore';

export class IBMLearnMore extends Component {
  render() {
    return (
      <LearnMore
        {...this.props}
      >
        Hey I was at IBM!
      </LearnMore>
    );
  }
}
export default IBMLearnMore;

