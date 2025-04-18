import React, { useState } from 'react'

function UseCounter() {

    const [count,setcount] = useState(0)

    const increment=()=>{
        setcount(count+1)
    }

    const decrement=()=>{
        setcount(count-1)
    }

    const zero=()=>{
        setcount(0)
    }

    return [count,increment,decrement,zero]

  return (
    <div>
      
    </div>
  )
}

export default UseCounter
