import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../feactures/counter/counterSlice";
import todoSlice  from "../feactures/todolist/todoSlice";

export default configureStore({
    reducer:{
        // reducer 
        counter : counterSlice,
        todo : todoSlice
    }
})