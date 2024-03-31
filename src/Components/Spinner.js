import React, { Component } from 'react'
import loder from './loder.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center justify-content-center my-3'>
        <img src={loder} alt="loding"/>
      </div>
    )
  }
}
