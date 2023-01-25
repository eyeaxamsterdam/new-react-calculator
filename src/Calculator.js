import React, { Component } from "react"
import Display from "./Display"
import Buttons from "./Buttons"
export default class App extends Component {
  render() {
    return (
      <div className='calculator'>
        <Display />
        <Buttons />
      </div>
    )
  }
}
