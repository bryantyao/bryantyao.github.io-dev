import * as React from "react";
import { Component } from 'react';

export class Experience extends Component {
    render() {
        return (
          <div className={`experience ${this.props.moreClassName || ""}`}>
            <p>I am a software engineer with <b>over 4 years of full-stack software development experience</b>.</p>
            <p>I have worked with both <b>Java and Ruby</b> applications that talked to a <b>relational database (Derby and MySQL)</b>.</p>
            <p>I started work at <a href="#ibm">IBM</a> where we used the Dojo Toolkit to develop the front end and Java to develop the back end.</p>
            <p>Afterwards I worked at <a href="#hf">Health Fidelity</a> where we used jQuery and server-side rendering to develop the front end and Ruby to develop the back end.</p>
          </div>
        );
  }
}

