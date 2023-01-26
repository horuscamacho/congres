import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const bringUsers = createAsyncThunk(
    'traerUSuarios/bringUsers',
    async (data) => {
        try {
            const response = await axios.get(`${local}/usuarios`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)


const initialState = {
    traerUsuarios: [],
    status: "idle",
    error: null
}


export const bringAllUsers = createSlice({
    name: "traerUsuarios",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(bringUsers.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default bringAllUsers.reducer