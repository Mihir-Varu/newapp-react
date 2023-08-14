import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>adding some new lines</h2>
        <NavBar />
        <News />
      </div>
    )
  }
}

