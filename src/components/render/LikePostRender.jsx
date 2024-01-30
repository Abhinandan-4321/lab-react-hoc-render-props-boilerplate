import React, { useState } from 'react'
function LikePost(props) {

  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}
export default LikePost