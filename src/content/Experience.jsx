import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div className={`experience ${this.props.moreClassName || ""}`}>
        <p>I am a software engineer with <b>over 4 years of experience developing web applications</b>.</p>
        <div>
        <p>Throughout my career, I have developed both <b>user-facing and backend features</b> using:</p>
        <table className="techStack">
          <thead>
            <tr>
              <th>Company</th>
              <th>Front end</th>
              <th>Back end</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IBM</td>
              <td>JavaScript (Dojo Toolkit)</td>
              <td>Java</td>
            </tr>
            <tr>
              <td>Health Fidelity</td>
              <td>JavaScript (jQuery) and server-side templates (ERB)</td>
              <td>Ruby on Rails</td>
            </tr>
            </tbody>
        </table>
        </div>
        <p>I have also done some <b>DevOps</b> work at Health Fidelity, where I used <b>Chef and Jenkins</b> to provision and deploy to application servers.</p>
        <p>I am always eager to learn and try new technologies. Currently, I'm dabbling with React (which is what this site is built in) and Docker.</p>
        <p><span>If you would like a copy of my resume, click </span>
          <a href="https://github.com/bryantyao/resume/raw/master/bryantyao_resume.pdf">here</a><span>.</span></p>
        <p></p>
      </div>
    );
  }
}

