import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            state.todo.push(action.payload)
        },
        removetodo: (state,action) => {
            state.todo = state.todo.filter((todo,index) => index != action.payload)
        }
    },
    extraReducers:{
        
    }
})

export const { addTodo, removetodo } = todoSlice.actions;

export default todoSlice.reducer;