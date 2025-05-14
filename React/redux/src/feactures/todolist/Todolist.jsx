import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todolist() {

    const todos = useSelector((state) => state.todo.todo)
    console.log(todos)

    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {
                    todos.map((todo,index) => {
                        console.log(todo)
                        return (
                            <li key={index}>
                                {todo} <button onClick={()=>dispatch(removetodo(index))}>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist
