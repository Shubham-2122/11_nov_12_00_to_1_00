import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../feactures/counter/counterSlice";

export default configureStore({
    reducer:{
        // reducer 
        counter : counterSlice
    }
})