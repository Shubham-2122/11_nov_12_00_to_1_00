// varibale 

import React from 'react'

function Hello2() {

    let name = "yug patel";

    let data = <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>Help</li>
    </ul>

    let person = {
        name : "het patel",
        age : 23
    }

    // console.log("hello react data")

    // console.log(person.name)

  return (
    <div>
      <h1>hello 2 compo</h1>
      <h1>hello name :- {name}</h1>

      <h2>hello sum :- {5+5}</h2>

        {data}

        <h1>hello this name {person.name}</h1>
        {
            // javscript allow
            console.log("hello :- ",person.name)
        }
    </div>
  )
}

export default Hello2
