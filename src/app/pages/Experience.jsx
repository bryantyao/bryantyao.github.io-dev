import * as React from "react";
import { Component } from 'react';
import Page from './layouts/Page.jsx';

export class Experience extends Component {
  render() {
    const { moreClassName, ...other } = this.props;
    return (
      <Page moreClassName={`experience ${moreClassName || ""}`} {...other} title="bryant_yao.experience">
        <div>
          <p>I started my career at IBM in 2012 where I helped build the IMz Tools Administration Console, a web app that helped DBAs better administrate their IMS and DB/2 databases.</p>
          <p>Later, I went to Health Fidelity in 2014 where I helped productionize and build HCC Scout, a workflow tool that helped medical coders efficiently code medical documents.</p>
          <p>At the end of 2016, I left Health Fidelity and am currently looking for new opportunities while learning new technologies.</p>
          <p><span>If you would like a copy of my resume, click </span>
            <a href="https://github.com/bryantyao/resume/raw/master/bryantyao_resume.pdf">here</a><span>.</span>
          </p>
        </div>
      </Page>
    );
  }
}
export default Experience;

