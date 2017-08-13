import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div id={this.props.id || ""} className={`home ${this.props.moreClassName || ""}`}>
          <pre className="code">
            <code className="language-ruby">
{`def bryant_yao
  { job:     'Software Engineer' ,
    hobbies: [ 'Beer/Coffee/Whisky Enthusiast' ,
               'Casual Gamer' ,
               'Programming' ] }
end`}
            </code>
          </pre>
      </div>
    );
  }
}

