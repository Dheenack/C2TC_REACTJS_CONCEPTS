import React from 'react'
import {WithCounter}  from './WithCounter'
const ClickCounter = ({count,incrementCount}) => {
  return (
    <div>
        <button
        onClick={incrementCount}
        >
            Clicked {count} times
        </button>
    </div>
  )
}

export default WithCounter(ClickCounter,1)