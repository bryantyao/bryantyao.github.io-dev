import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
  render() {
    const { id, moreClassName, ...other } = this.props;
    return (
      <div id={id || ""} className={`home ${moreClassName || ""}`} {...other}>
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

