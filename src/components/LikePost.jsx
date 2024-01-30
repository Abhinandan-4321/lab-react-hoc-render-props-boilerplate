import React, { useState } from 'react'
import Wrap from './Wrap'
function LikePost(props) {

  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}
export default Wrap(LikePost)