import * as React from "react";
import { Component } from 'react';
import { Home, Experience, About } from './content/content.js';

export default class Content extends Component {
    render() {
        return (
            <div className={`content ${this.props.moreClassName || ""}`}>
              <Home moreClassName="active"/>
              <Experience/>
              <About/>
            </div>
        );
    }
}

