import React, { createContext, useState } from 'react';
import CompoD from './CompoD';
import CompoB from './CompoB';

export const data = createContext()

function CompoA() {

  const [name,setname] = useState("yug patel")
  const [form,setform] = useState({
    count : 0,
    isimage: true
  })

  return (
    <div>
      <h1>Hello Compo A</h1>
      {/* use context */}
      {/* 1) create   */}
      {/* 2) provider  */}
    
      <data.Provider value={{name,setname,form,setform}}>
        <CompoD />
        <CompoB />
      </data.Provider>

    </div>
  )
}

export default CompoA
