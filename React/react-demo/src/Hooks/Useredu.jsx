import React, { useReducer, useState } from 'react'
import Header from '../layout/Coman/Header'

const initinal = 0

// comana logic
export function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1
      break;
    case 'decrement':
      return state - 1
      break;
    case 'zero':
      return initinal
      break;
    default:
      return state;
      break;
  }
}


function Useredu() {

  const [data,setdata] = useState("nasjh")
  // complex state 
  const [count, dispatch] = useReducer(reducer, initinal)


  return (
    <div>
      <Header />
      <h1>hello count :- {count}</h1>
      <button onClick={() => dispatch('increment')}>Incement</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('zero')}>Zero</button>
    </div>
  )
}

export default Useredu
