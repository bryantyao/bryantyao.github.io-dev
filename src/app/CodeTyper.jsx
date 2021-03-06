import * as React from "react";
import { Component } from 'react';
import hljs from 'highlight.js';

export class CodeTyper extends Component {
  static get DEFAULT_TYPING_INTERVAL() { return 100; }

  constructor(props) {
    super(props);
    const { onAnimateComplete, message, typingInterval } = props;

    this.onAnimateComplete = onAnimateComplete || (() => {});
    this.message = message || '';
    this._type_text = this._type_text.bind(this);

    if(typingInterval === 0) {
      this.state = { len: this.message.length - 1 };
      this.typingInterval = 0;
    } else {
      this.state = { len: 0 }
      this.typingInterval = props.typingInterval || CodeTyper.DEFAULT_TYPING_INTERVAL;
    }
  }

  componentDidMount() {
    this.text_typer_id = setInterval(
      this._type_text,
      this.typingInterval
    );
  }

  componentWillUnmount() {
    clearInterval(this.text_typer_id);
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.code);
  }

  render() {
    const text = this.message.substr(0, this.state.len);

    return (
      <pre className="code">
        <code className="language-ruby" ref={ (el) => { this.code = el } }>
          {text}
        </code>
      </pre>
    );
  }

  //private

  _type_text() {
    if(this.state.len >= this.message.length) {
      clearInterval(this.text_typer_id);
      this.onAnimateComplete();
      return;
    }

    let length = this.state.len + 1;

    while(this.message[length-1] === ' ') {
      length += 1;
    }

    this.setState({
      len: length
    });
  }
}
export default CodeTyper;

