// useEffect ;- function side effect 
// Api data automaticall 
// second optional / depe ,[],,[state]
// re-redering compo 
// useEffect is a React Hook that lets you synchronize a component with an external system.

import React, { useEffect, useState } from 'react'

function Useeffect() {
  
  const [name,setname] = useState("divyang")

  // 1) without depe
  // useEffect(()=>{
  //   console.log("hello this without depe");
  // })

  // 2) with depe with blank array
  // useEffect(()=>{
  //   console.log("hello this without depe");
  //   return(()=>{
  //     console.log("Hello with blank data")
  //   })
  // },[])

    // 3) with state depe with 
     useEffect(()=>{
      console.log("hello this with depe");
      return(()=>{
        console.log("Hello with blank data")
      })
    },[name])
  
  return (
    <div>
        Hello :- {name}

        <button onClick={()=>setname("yug patel")}>Change name</button>
    </div>
  )
}

export default Useeffect
