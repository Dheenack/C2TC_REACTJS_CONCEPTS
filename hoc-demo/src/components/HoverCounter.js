import React from 'react'
import { WithCounter } from './WithCounter';

const HoverCounter = ({count,incrementCount}) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  )
}

export default WithCounter(HoverCounter,2);