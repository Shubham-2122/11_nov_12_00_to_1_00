import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>Hello this D Compo</h1>
      <h2>Hello this name :- {name}</h2>
      <button onClick={()=>{setname("dharmik")}}>Change name</button>
    </div>
  )
}

export default D
