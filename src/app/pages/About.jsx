import * as React from "react";
import { Component } from 'react';

export class About extends Component {
  render() {
    const { id, moreClassName, ...other } = this.props;
    return (
      <div id={id || ""} className={`about ${moreClassName || ""}`} {...other}>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-50 py-5">
          <h1 className="mb-5">bryant_yao.about</h1>
          <div style={{ "max-width": "40rem" }}>
            <p>
              Hey there, I'm Bryant Yao and I am a <b>full-stack software engineer</b>. I specialize in developing web applications, both user-facing and back end features.
            </p>
            <p>
              I am always eager to learn 
            </p>
            <p>Hey, there I'm Bryant Yao and I am a <b>full-stack software engineer.</b></p>
            <p>I specialize in developing web applications, both user-facing and backend features.</p>
          </div>
        </div>
      </div>
    );
  }
}

