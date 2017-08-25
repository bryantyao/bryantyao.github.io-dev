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
          I was a full-stack software engineer on HCC Scout, a SaaS solution for medical coders to review and code medical records. I was one of the first members on the team, helping to productionize and develop the product. Additionally, I worked on some of the backend services that the product depended on like the clinical document repository.
        </p>
        <h2>Tech Stack</h2>
        <p>
          HCC Scout was built on Ruby on Rails. It used jQuery, Bootstrap and server-side templates for the front end and MySQL for the database.
        </p>
        <p>
          On the infrastructure side, HCC Scout was provisioned and deployed using a combination of Jenkins, Capistrano and Chef.
        </p>
      </LearnMoreBase>
    );
  }
}
export default LearnMore;

