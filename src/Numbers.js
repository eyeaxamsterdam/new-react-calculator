import React from "react"

export default function Numbers(props) {
  let number = props.number
  let stylename = props.stylename

  return <div className={stylename + " calcbtn"}>{number}</div>
}
