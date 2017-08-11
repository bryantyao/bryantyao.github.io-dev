import * as React from "react";
import { Component } from 'react';

export class Home extends Component {
  classNameForCode(code) {
    let className = '';

    let trimmedCode = code.trim();
    if(trimmedCode == 'def' || trimmedCode == 'end') {
      className = 'keyword';
    } else if(trimmedCode.endsWith(':')) {
      className = 'symbol';
    } else if(trimmedCode.startsWith("'") && trimmedCode.endsWith("'")) {
      className = 'string';
    } else if(trimmedCode === 'bryant_yao') {
      // This is a hack because I don't have an easy way to detect that this is a function name
      className = 'functionName';
    }

    return className;
  }

  codeToHTML(str) {
    const className = this.classNameForCode(str);
    return `<span class="${className}">${str}</span>`;
  }

  codeArrayToHTML(codeArray) {
    const codeToStr = codeArray
                        .map(this.codeToHTML.bind(this))
                        .join(' ');
    return `<div>${codeToStr}</div>`;
  }

  render() {
    /*
     * def bryant_yao
     *  { job: 'Software Engineer',
     *    hobbies: ['Beer/Coffee/Whisky Enthusiast',
     *              'Casual Gamer',
     *              'Programming']
     * end
     */
    const code = [
      ['def', 'bryant_yao'],
      ['  {', 'job:    ', "'Software Engineer'", ","],
      ['   ', 'hobbies:', '[', "'Beer/Coffee/Whisky Enthusiast'", ','],
      ['   ', '        ', "  'Casual Gamer'", ','],
      ['   ', '        ', "  'Programming'", '] }'],
      ['end']
    ];
    const codeToHTML = code.map(this.codeArrayToHTML.bind(this)).join('');
    const content = { __html: codeToHTML };

    return (
      <div id={this.props.id || ""} className={`home d-flex ${this.props.moreClassName || ""}`}>
        <div className="code" dangerouslySetInnerHTML={content} />
      </div>
    );
  }
}

