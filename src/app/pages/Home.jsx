import React, { Component } from 'react';
import { CodeTyper } from 'app/CodeTyper';

export class Home extends Component {
  static get MESSAGE() {
    return `def bryant_yao
    Person.new( job:       'Software Engineer',
                interests: [ 'Beer/Coffee/Whisky',
                             'Gaming',
                             'Programming' ] )
end`;
  }

  render() {
    const { className, ...other } = this.props;
    return (
      <div className={`home centered ${className || ""}`}>
        <CodeTyper
          message={Home.MESSAGE}
          {...other} />
      </div>
    );
  }
}
export default Home;

