import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("yug patel")

  return (
    <div>
      <h1>Hello this A compo</h1>
      {/* <h1>hello name {name}</h1> */}
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
