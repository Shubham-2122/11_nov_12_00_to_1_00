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

// delete
export const deleteuser = createAsyncThunk(
    'deleteuser', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`);
            const resp = res.data
            return resp;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// update data
export const updatedata = createAsyncThunk(
    'updatedata', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/${data.id}`, data)
            const resp = res.data
            return resp;

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

            // delete
            .addCase(deleteuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false;

                const { id } = action.payload
                if (id) {
                    state.user = state.user.filter((data) => data.id !== id)
                }
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            // update data
            .addCase(updatedata.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatedata.fulfilled, (state, action) => {
                state.loading = false;

                state.user = state.user.map((ele) =>
                    // edit query
                    ele.id = action.payload ? action.payload : ele

                )

            })
            .addCase(updatedata.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }

})

export const { userpending, userFullfield, userReject } = userSlice.actions;

export default userSlice.reducer;