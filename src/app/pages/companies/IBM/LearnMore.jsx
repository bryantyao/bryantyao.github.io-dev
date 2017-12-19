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
        <h2 className="my-3">Accomplishments</h2>
        <ul>
          <li>
            Developed new extension points that allow other developers to extend our web interface
          </li>
          <li>
            Developed and enhanced web pages that are used to create a simple, comprehensive overview of the enterprise or interface with DB2 and IMS tools on the mainframe
          </li>
          <li>
            Developed and maintained SQL code that can be used to capture user input or cache information from the mainframe
          </li>
          <li>
            Wrote threads responsible for synchronizing databases exceptions and reports generated from IMS tools
          </li>
        </ul>
      </LearnMoreBase>
    );
  }
}
export default LearnMore;

