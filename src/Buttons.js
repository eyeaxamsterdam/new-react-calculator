import React, { Component } from "react"
import Numbers from "./Numbers"

export default class Buttons extends Component {
  render() {
    return (
      <div className='clickarea'>
        <Numbers number='1' />
        <Numbers number='2' />
        <Numbers number='3' />
        <Numbers number='+' />
        <Numbers number='5' />
        <Numbers number='6' />
        <Numbers number='4' />
        <Numbers number='-' />
        <Numbers number='7' />
        <Numbers number='8' />
        <Numbers number='9' />
        <Numbers number='x' />
        <Numbers number='%' stylename='bottom-left-corner' />
        <Numbers number='.' />
        <Numbers number='0' />
        <Numbers number='=' stylename='bottom-right-corner' />
      </div>
    )
  }
}
