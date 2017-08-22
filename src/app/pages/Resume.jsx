import React, { Component } from 'react';
import Page from 'app/pages/layouts/Page.jsx';

export class Resume extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <Page className={`resume ${className || ''}`} {...other} title='Resume'>
        <div className="linkContainer">
          <a href="https://bryantyao.com/resume/bryantyao_resume.pdf">View</a>
          <a href="https://github.com/bryantyao/resume/raw/master/bryantyao_resume.pdf">Download</a>
        </div>
      </Page>
    );
  }
}
export default Resume;

