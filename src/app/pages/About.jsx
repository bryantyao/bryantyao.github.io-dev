import * as React from "react";
import { Component } from 'react';
import Page from './layouts/Page.jsx';

export class About extends Component {
  render() {
    const { id, moreClassName, ...other } = this.props;
    return (
      <Page moreClassName={`about ${moreClassName || ""}`} {...other} title="bryant_yao.about">
          <div className="byao mb-3"></div>
          <div>
            <p>
              Hey there, I'm Bryant Yao and I am a <b>full-stack software engineer</b>. I specialize in developing web applications, both front and back end.
            </p>
            <p>
              I am flexible working with any tech stack. I have used:
              <ul>
                  <li>Dojo Toolkit with Java</li>
                  <li>jQuery and ERB server-side templates with Ruby on Rails</li>
              </ul>
              Additionally, I am currently trying out React for this website (see <a href="https://github.com/bryantyao/bryantyao.github.io-dev">source</a>).
            </p>
            <p>
              When I'm not programming, I enjoy playing video games, going to coffee shops, and sampling new beers and whiskies.
            </p>
          </div>
      </Page>
    );
  }
}
export default About;

