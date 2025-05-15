import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read fucntion


export const showuser = createAsyncThunk(
    'showuser', async (arug, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/user")
            const resp = res.data
            return resp;
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)

// create data
export const createuser = createAsyncThunk(
    'createuser', async (arug, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/user", arug)
            const resp = res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "userdetails",
    initialState: {
        user: [],
        loading: false,
        error: ""
    },
    reducers: {
        userpending: (state) => {
            state.loading = true
        },
        userFullfield: (state, action) => {
            state.loading = false,
                state.user.push(action.payload)
        },
        userReject: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // read 
            .addCase(showuser.pending, (state) => {
                state.loading = true
            })
            .addCase(showuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(showuser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            // create
            .addCase(createuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload)
            })
            .addCase(createuser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }

})

export const { userpending, userFullfield, userReject } = userSlice.actions;

export default userSlice.reducer;