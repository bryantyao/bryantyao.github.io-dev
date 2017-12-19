import React, { Component } from 'react';
import Page from 'app/pages/layouts/Page';

export class About extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`about ${className || ""}`} {...other} title="About">
        <div className="">
          <div>
            <p>Hey there! I'm Bryant Yao and I'm a software engineer that develops web applications.</p>
            <p>I am experienced with multiple facets of application development:</p>
            <ul>
              <li>front end (JS/HTML/CSS)</li>
              <li>back end (Java/Ruby)</li>
              <li>database (SQL)</li>
              <li>deployment (Chef/Jenkins/Capistrano)</li>
            </ul>
            <p>Currently, I am learning React for this website (<a href="https://github.com/bryantyao/bryantyao.github.io-dev">source code</a>) and Docker.</p>
            <p>When I'm not programming, I enjoy reading tech articles, playing video games, going to coffee shops, and sampling new beers and whiskies.</p>
          </div>
        </div>
      </Page>
    );
  }
}
export default About;

