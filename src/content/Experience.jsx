import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div id={this.props.id || ""} className={`experience ${this.props.moreClassName || ""}`}>
        <div>
          <p>I have <b>over 4 years of experience developing web applications</b>.</p>
          <p>Throughout my career, I have developed both <b>user-facing and backend features</b> using:</p>
          <ul>
              <li>JavaScript (DojoToolkit) with  Java</li>
              <li>JavaScript (jQuery) and server-side templates (ERB) with Ruby on Rails</li>
          </ul>
          <p>I have also done some <b>DevOps</b> work at Health Fidelity, where I used <b>Chef and Jenkins</b> to provision and deploy to application servers.</p>
          <p>I am always eager to learn and try new technologies. Currently, I'm dabbling with React (which is what this site is built in) and Docker.</p>
          <p><span>If you would like a copy of my resume, click </span>
            <a href="https://github.com/bryantyao/resume/raw/master/bryantyao_resume.pdf">here</a><span>.</span>
          </p>
        </div>
      </div>
    );
  }
}

