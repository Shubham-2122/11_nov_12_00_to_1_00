import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // action
    name : "counter",
    initialState : {
        value : 0
    },
    // logic
    reducers:{
        increment : (state)=>{
            state.value +=  1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        zero : (state)=>{
            state.value = 0
        }
    }
})

// action
export const {increment,decrement,zero} = counterSlice.actions

export default counterSlice.reducer