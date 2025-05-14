import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "userdetails",
    initialState:{
       user : [],
       loading:false,
       error : "" 
    },
    reducers:{
        userpending : (state)=>{
            state.loading = true
        },
        userFullfield : (state,action)=>{
            state.loading = false,
            state.user.push(action.payload)
        },
        userReject : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    },
    
})

export const {userpending,userFullfield,userReject} = userSlice.actions;

export default userSlice.reducer;