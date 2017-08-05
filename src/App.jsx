import * as React from "react";
import { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';

export default class App extends Component {
    render() {
        return (
            <div id="app" className="app">
              <Header moreClassName="fixed-top"/>
              <Content/>
            </div>
        );
    }
}

