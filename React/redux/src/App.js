import React from 'react'
import Count from './feactures/counter/Count'
import Todolist from './feactures/todolist/Todolist'
import Addtodo from './feactures/todolist/Addtodo'

function App() {
  return (
    <div>
      <h1>Hello this React+Redux app</h1>
      {/* <Count /> */}
      <Addtodo />
      <Todolist />
    </div>
  )
}

export default App
