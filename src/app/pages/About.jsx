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
              Hey there, I'm Bryant Yao and I am a <b>full-stack software engineer</b>. I specialize in developing web applications, both front end and back.
            </p>
            <p>
              I love learning new technologies and I'm flexible working with most technologies. As an example, I started my career in Java and later learned Ruby (mostly from scratch) at my second job.
              Currently, I am trying out React for this website (see <a href="https://github.com/bryantyao/bryantyao.github.io-dev">source</a>) as well as Docker.
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

