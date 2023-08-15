import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>/
        <h1>Today's Date is : 15/08/2023 </h1>
        <NavBar />
        <News />
      </div>
    )
  }
}

