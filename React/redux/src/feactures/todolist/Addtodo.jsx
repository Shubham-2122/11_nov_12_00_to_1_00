import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function Addtodo() {

    const [data, setdata] = useState("")

    const dispatch = useDispatch()

    const onsubmmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(data))
        setdata("")
    }

    return (
        <div>
            <form action="">
                <input type="text" value={data} onChange={(e) => setdata(e.target.value)} />
                <input type="submit" onClick={onsubmmit} value="add" />
            </form>
        </div>
    )
}

export default Addtodo
