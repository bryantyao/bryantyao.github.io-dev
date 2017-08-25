import React, { Component } from 'react';
import LearnMoreBase from 'app/pages/companies/LearnMore';

export class LearnMore extends Component {
  render() {
    return (
      <LearnMoreBase
        {...this.props}
      >
        <h2>Summary</h2>
        <p>
          I was a full-stack software engineer on Tools Base Administration Console, a web application for monitoring and managing IMS and DB2 databases across a user's entire enterprise.
        </p>
        <h2>Tech Stack</h2>
        <p>
          Tools Base Administration console was built using Java. The front end used Dojo Toolkit, the backend used Othe OSGi framework (similar to Spring), and the database used Apache Derby.
        </p>
      </LearnMoreBase>
    );
  }
}
export default LearnMore;

