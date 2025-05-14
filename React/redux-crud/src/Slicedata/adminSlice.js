import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name : "admindata",
    initialState : {
        admin : [],
        loading : false,
        error : ""
    },
    reducers:{
        adminpending : (state)=>{
            state.loading = true
        },
        adminFullfield : (state,action)=>{
            state.loading = false,
            state.admin.push(action.payload)
        },
        adminReject : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    }
})

export const {adminpending,adminFullfield,adminReject} = adminSlice.actions;

export default adminSlice.reducer;