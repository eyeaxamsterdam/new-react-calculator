import React, { Component } from "react"
import Numbers from "./Numbers"

export default class Buttons extends Component {
  render() {
    return (
      <div className='clickarea'>
        <Numbers number='C' stylename='leftsidecalc alterbtn' />
        <Numbers number='+/-' stylename='alterbtn' />
        <Numbers number='%' stylename='alterbtn' />
        <Numbers number='/' stylename='opbtn' />

        <Numbers number='7' stylename='leftsidecalc numbtn' />
        <Numbers number='8' stylename='numbtn' />
        <Numbers number='9' stylename='numbtn' />
        <Numbers number='X' stylename='opbtn' />

        <Numbers number='4' stylename='leftsidecalc numbtn' />
        <Numbers number='5' stylename='numbtn' />
        <Numbers number='6' stylename='numbtn' />
        <Numbers number='-' stylename='opbtn' />

        <Numbers number='1' stylename='leftsidecalc numbtn' />
        <Numbers number='2' stylename='numbtn' />
        <Numbers number='3' stylename='numbtn' />
        <Numbers number='+' stylename='opbtn' />

        <Numbers
          number='0'
          stylename='bottomcalc leftsidecalc zerobtn numbtn'
        />
        <Numbers number='.' stylename='bottomcalc numbtn' />
        <Numbers number='=' stylename='bottomcalc opbtn equalsbtn' />
      </div>
    )
  }
}
