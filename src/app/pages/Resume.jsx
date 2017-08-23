import React, { Component } from 'react';
// need TreeShaker to use the { class } syntax
import FileDownload from 'material-ui-icons/FileDownload';

export class Resume extends Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <div className={`resume d-flex align-items-center ${className || ''}`} {...other}>
        <h4>Resume</h4>
        <a className="ml-1" href="https://bryantyao.com/resume/bryantyao_resume.pdf">
          <FileDownload style={{ width: '1.75rem', height: '1.75rem' }}/>
        </a>
      </div>
    );
  }
}
export default Resume;

