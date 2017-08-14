import * as React from "react";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class FullPage extends Component {
      /*afterLoad: (anchor, index) => {
        console.log(`Loaded: ${anchor} ${index}`);
        $(`div[data-anchor='${anchor}']`).addClass('animated fadeIn');
      },
      /*onLeave: (index, nextIndex, direction) => {
        let anchor = anchors[index];
        console.log(`Leaving: ${anchor} ${index}`);
        $(`div[data-anchor='${anchor}']`).removeClass('animated fadeIn');
      }*/
  componentDidMount() {
    const pageDOM = ReactDOM.findDOMNode(this.page);
    const { id, className, style, children, ...other } = this.props;

    const props = Object.assign({
      afterLoad: this.afterLoad.bind(this),
      onLeave: this.onLeave.bind(this)
    }, props);

    $(pageDOM)
      .fullpage(props);
  }

  // Note: index starts at 1
  afterLoad(anchor, index) {
    console.log(`After load: ${this}`);
    const component = this[`child_${index-1}`];
    if(!component) {
      return;
    }

    if (typeof component.onEnter === "function") { 
      component.onEnter();
    }
  }

  // Note: index starts at 1
  onLeave(index, nextIndex, direction) {
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
}

