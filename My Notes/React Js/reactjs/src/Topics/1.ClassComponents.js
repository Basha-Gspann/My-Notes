// rcc 

import React, { Component } from 'react'

export default class ClassComponents extends Component {
    state={
        name:"Rabbani Basha",
    }
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
      </div>
    )
  }
}
