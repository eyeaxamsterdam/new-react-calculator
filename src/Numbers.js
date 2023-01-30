import React from "react"

export default function Numbers(props) {
  let number = props.number
  let stylename = props.stylename
  let displaytext

  return (
    <div
      onClick={(event, displaytext) => {
        displaytext += event.target
        console.log(displaytext)
      }}
      className={stylename + " calcbtn"}
    >
      {number}
    </div>
  )
  console.log(displaytext)
}
