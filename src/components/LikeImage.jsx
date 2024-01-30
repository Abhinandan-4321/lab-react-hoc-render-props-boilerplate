import React, { useState } from 'react'
import Wrap from './Wrap'
function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}
export default Wrap(LikeImage)
