import React, { Component } from 'react';
import LearnMoreBase from 'app/pages/companies/LearnMore';

export class LearnMore extends Component {
  render() {
    return (
      <LearnMoreBase
        {...this.props}
      >
        <h2 className="my-3">Summary</h2>
        <p>
          I was a full-stack software engineer on HCC Scout, a SaaS solution for medical coders to review and code medical records. I was one of the first members on the team, helping to productionize and develop the product. Additionally, I worked on some of the backend services that the product depended on like the clinical document repository.
        </p>
        <h2 className="my-3">Tech Stack</h2>
        <p>
          HCC Scout was built on Ruby on Rails. It used jQuery, Bootstrap and server-side templates for the front end and MySQL for the database.
        </p>
        <p>
          On the infrastructure side, HCC Scout was provisioned and deployed using a combination of Jenkins, Capistrano, Chef, AWS OpsWorks.
        </p>
        <h2 className="my-3">Accomplishments</h2>
        <ul>
          <li>
              Developed Chef recipes to automate the provisioning of application servers
          </li>
            <li>
              Wrote scripts and embedded them in Jenkins to deploy our applications
          </li>
            <li>
              Developed new features for backend applications to enhance the capabilities of HCC Scout
            <ul>
                <li>
                  Example: Added an OCR workflow to our document repository for processing image documents
              </li>
              </ul>
            </li>
            <li>
              Developed new features end to end to enhance existing user workflows and meet new business requirements
            <ul>
                <li>
                  Example: Developed the ICD-10 RAPs feature to view CMS accepted ICD-10 codes
              </li>
              </ul>
            </li>
            <li>
              Worked with client services and IT Operations to improve their ability to onboard new and support existing customers
          </li>
        </ul>
      </LearnMoreBase>
    );
  }
}
export default LearnMore;

