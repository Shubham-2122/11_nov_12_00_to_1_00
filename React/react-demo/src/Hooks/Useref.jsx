// user ref :- real dom 
// use ref :- re-reder stops

import React, { useRef } from 'react'
import Header from '../layout/Coman/Header'

function Useref() {
    
    const ref = useRef()
  
    const getdata = ()=>{
        ref.current.focus();
        ref.current.style.background = "red";
        ref.current.style.background = "red";

    }

    return (
    <div>
      {/* real dom Dom manu */}
      <Header />

      <input type="text" ref={ref} placeholder='Enter your name`' />
      <button onClick={getdata}>Add data</button>
    </div>
  )
}

export default Useref
