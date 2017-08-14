import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
  render() {
    const { id, moreClassName, ...other } = this.props;
    return (
      <div id={id || ""} className={`experience d-flex flex-column align-items-center h-100 w-100 mt-5 ${moreClassName || ""}`} {...other}>
        <div className="display-4 mb-5">bryant_yao.experience</div>
        <div>
          <p>I am a <b>full-stack software engineer</b> that develops web applications.</p>
          <p>I started my career at IBM in 2012 where I helped build the IMz Tools Administration Console, a web app that helped DBAs better administrate their IMS and DB/2 databases.</p>
          <p>Later, I went to Health Fidelity in 2014 where I helped productionize and build HCC Scout, a workflow tool that helped medical coders efficiently code medical documents.</p>
          <p>At the end of 2016, I left Health Fidelity and am currently looking for new opportunities while learning new technologies.</p>
          <p>
            <span>I am always eager to learn and try new technologies. Currently, I'm dabbling with React (which is what this site is </span>
            <a href="https://github.com/bryantyao/bryantyao.github.io-dev">built in</a>
            <span>) and Docker.</span></p>
          <p><span>If you would like a copy of my resume, click </span>
            <a href="https://github.com/bryantyao/resume/raw/master/bryantyao_resume.pdf">here</a><span>.</span>
          </p>
        </div>
      </div>
    );
  }
}

