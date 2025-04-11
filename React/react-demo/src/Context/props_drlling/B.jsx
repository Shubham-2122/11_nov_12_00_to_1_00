import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>hello this B compo</h1>
      <h2>Hello name :- {name}</h2>
      <button onClick={()=>setname("shubham jadav")}>change name</button>
      <C name={name} setname={setname} />
    </div>
  )
}

export default B
