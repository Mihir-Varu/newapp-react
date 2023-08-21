import React, { Component } from 'react'
import loading from './loadimg.gif'

export default class Sinners extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
