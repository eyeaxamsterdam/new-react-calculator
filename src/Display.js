import React, { Component } from "react"
import Answer from "./Answer"

export default class Display extends Component {
  render() {
    return (
      <div className='display'>
        <div className='history-display'>History</div>
        <Answer />
      </div>
    )
  }
}
