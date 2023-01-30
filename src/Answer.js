import React, { Component } from "react"

export default class Answer extends Component {
  constructor() {
    super()
    this.state = 0
  }
  render() {
    return <div className='result-display'>{this.state}</div>
  }
}
