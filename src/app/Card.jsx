import * as React from "react";
import { Component } from 'react';

export class Card extends Component {
  render() {
    const { className, img:Image, title } = this.props;
    return (
      <div className={`card ${className || ''}`}>
        <h2 className="card-title">
          {title}
        </h2>
        <div className="card-block">
        {/*<div>
            <Image width={200} />
          </div>*/}
          <a href="#" className="btn btn-primary mt-auto">View More</a>
        </div>
      </div>
    );
  }
}
export default Card;

