import React, { useState } from 'react'
function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}
export default LikeImage
