import * as React from "react";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class FullPage extends Component {
  componentDidMount() {
    const props = Object.assign({}, this.props.options, {
      afterLoad: this._afterLoad.bind(this),
      onLeave: this._onLeave.bind(this)
    });

    $(this.page)
      .fullpage(props);
  }

  render() {
    const { className, children } = this.props;

    const childrenWithRef = children.map((child, index) => (
      React.cloneElement(child, {
        ref: (e) => { this[`child_${index}`] = e }
      })
    ));

    return(
      <div
        className={className || ''}
        ref={(page) => { this.page = page; }}
      >
        {childrenWithRef}
      </div>
    );
  }

  //private

  // Note: index starts at 1
  _afterLoad(anchor, index) {
    const component = this[`child_${index-1}`];
    if(!component) {
      return;
    }

    if (typeof component.onEnter === "function") { 
      component.onEnter();
    }
  }

  // Note: index starts at 1
  _onLeave(index, nextIndex, direction) {
    const leavingComponent = this[`child_${index-1}`];
    if(leavingComponent) {
      if (typeof leavingComponent.onLeave === "function") { 
        leavingComponent.onLeave();
      }
    }

    const enteringComponent = this[`child_${nextIndex-1}`];
    if(enteringComponent) {
      if (typeof enteringComponent.beforeEnter === "function") { 
        enteringComponent.beforeEnter();
      }
    }
  }
}

