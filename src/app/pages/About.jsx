import * as React from "react";
import { Component } from 'react';

export class About extends Component {
  render() {
    const { id, moreClassName, ...other } = this.props;
    return (
      <div id={id || ""} className={`about d-flex justify-content-end w-100 mt-5 ${moreClassName || ""}`} {...other}>
        <div className="d-flex flex-column h-50 py-5">
          {/*<h1 className="mb-5">bryant_yao.about</h1>*/}
          <div className="display-4 mb-5">bryant_yao.about</div>
          <div style={{ "max-width": "40rem" }}>
            <p>
              Hey there, I'm Bryant Yao and I am a <b>full-stack software engineer</b>. I specialize in developing web applications, both user-facing and back end features.
            </p>
            <p>
              I have worked with both <b>Java</b> and <b>Ruby</b> tech stacks.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

