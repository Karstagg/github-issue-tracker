import React from "react"
import "../css/styles.css"

const CardItem = (props) => {
  let text = props.text
  return (
    <div className="card-item col-md-4">
      {text}
    </div>
  )
}


export default CardItem