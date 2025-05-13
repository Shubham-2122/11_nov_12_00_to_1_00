import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function Count() {

    // action counter value store use
    const count = useSelector((state) => state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
        {/* useSelector */}

        {/* use dispatch */}
      <h1>hello Count :- {count} </h1>

      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decremetn</button>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count
