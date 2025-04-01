// state :- we can data change same file.
// Function v 16 Hooks
// hook :- only for use Function .
// Easy to use/ simple code 
// 1) useState :- hooks are resuse 
// state name and chnage ma,e set
// import useState and use return define
// useState is a React Hook that lets you add a state variable to your component.

import React, { useState } from 'react'
import Image from './Image'
 
function Func_state() {

    // varible , variale data change = useState(initialvalue)
    const [name,setname] = useState("Yug patel")
    const [count,setcount] = useState(0)
    const [isimage,setisiamge] = useState(true)

    const changename=()=>{
        setname("Shubham jadav")
    }

    return (
    <div>
      <h1>Hello this UseState compo</h1>
      <h1>Hello name :- {name}</h1>
      <button onClick={()=>{setname("dharmik patel")}}>Change name</button>
      <button onClick={changename}>Change name 2</button>

      <h1>Counter :- {count}</h1>
      <button onClick={()=>{setcount(count + 1)}}>Increment</button>
      <button onClick={()=>{setcount(count-1)}}>Decement</button>
      <button onClick={()=>{setcount(0)}}>Reset</button>


        <br /> <br />
        <button onClick={()=>setisiamge(false)}>Hide</button>
        <button onClick={()=>setisiamge(true)}>Show</button>
        <button onClick={()=>setisiamge(!isimage)}>Toggle</button>

      {(isimage)?<Image />:false}
    </div>
  )
}

export default Func_state
