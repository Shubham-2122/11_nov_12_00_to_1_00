import React, { useContext } from 'react'
import { data } from './CompoA'

function CompoD() {

    const {name,setname} = useContext(data)

  return (
    <div>
      <h1>Hello this Compo D</h1>
        
    <h1>Hello this name :- {name}</h1>
    <button>Chnage name</button>
    </div>
  )
}


export default CompoD
