import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slicedata/userSlice";
import  adminSlice  from "../Slicedata/adminSlice";


export default configureStore({
    reducer:{
        users : userSlice,
        admin : adminSlice
    }
})