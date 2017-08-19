import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
  render() {
    const { id, className, ...other } = this.props;
    return (
      <div id={id || ""} className={`home ${className || ""}`} {...other}>
          <pre className="code">
            <code className="language-ruby">
{`def bryant_yao
  Person.new( job:     'Software Engineer',
              hobbies: [ 'Beer/Coffee/Whisky Enthusiast',
                         'Casual Gamer',
                         'Programming' ] )
end`}
            </code>
          </pre>
      </div>
    );
  }
}
export default Home;

