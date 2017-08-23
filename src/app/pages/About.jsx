import React, { Component } from 'react';
import Page from 'app/pages/layouts/Page';

export class About extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`about ${className || ""}`} {...other} title="About">
        <div className="">
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
        </div>
      </Page>
    );
  }
}
export default About;

