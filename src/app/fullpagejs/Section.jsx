import * as React from "react";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import $ from 'jquery'

export class Section extends Component {

  beforeEnter() {
    const onEnter = this.props.onEnter;

    if(onEnter !== null && onEnter !== undefined) {
      if(typeof onEnter === 'string') {
        const dom = ReactDOM.findDOMNode(this.child);
        $(dom).css("opacity", 0);
      }
    }
  }

  onEnter() {
    const onEnter = this.props.onEnter;

    if(onEnter !== null && onEnter !== undefined) {
      if(typeof onEnter === 'string') {
        const dom = ReactDOM.findDOMNode(this.child);
        $(dom).addClass(`animated ${onEnter}`);
      }
    }
  }

  onLeave() {
    const onEnter = this.props.onEnter;

    if(onEnter !== null && onEnter !== undefined) {
      if(typeof onEnter === 'string') {
        const dom = ReactDOM.findDOMNode(this.child);
        $(dom).css("opacity", 1);
        $(dom).removeClass(`animated ${onEnter}`);
      }
    }
  }

  render() {
    const { className, onEnter, onLeave, ...other } = this.props;

    const child = React.Children.only(this.props.children);
    const childWithRef = React.cloneElement(child, {
      ref: (e) => { this.child = e; }
    });


    return(
      <div className={`section ${className || ''}`} {...other}>
        {childWithRef}
      </div>
    );
  }
}

