import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div className={`experience ${this.props.moreClassName || ""}`}>
        <p>I am a software engineer with <b>over 4 years of full-stack experience developing web applications</b>.</p>
        <p>Throughout my career, I have developed <b>user-facing features</b> and <b>backend code/infrastructure</b> using:</p>
        <table>
          <tr>
            <th>Company</th>
            <th>Front end</th>
            <th>Back end</th>
          </tr>
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
        </table>
        <p>I also have some experience with <b>DevOps</b> when I wrote code to <b>build and deploy an application to the cloud</b>.</p>
        <p>I enjoy learning new languages and software!</p>
      </div>
    );
  }
}

