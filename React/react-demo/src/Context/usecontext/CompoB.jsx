import React, { useContext } from 'react'
import { data } from './CompoA'

function CompoB() {

    const {form,setform} = useContext(data)

  return (
    <div>
      <h1>Compo B</h1>
      <h1>hello name : {form.count}</h1>
      <button onClick={()=>setform({...form,count: form.count + 1})}>increment</button>
    </div>
  )
}

export default CompoB
