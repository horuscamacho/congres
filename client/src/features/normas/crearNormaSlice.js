import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'


export const createRule = createAsyncThunk(
    'crearNorma/createRule',
    async (data) => {
        try{
            const response = await axios.post(`${local}/crearnorma`, data)
            return response.data
        }catch (e) {
            return e.message
        }
    }
)


const initialState = {
    crearNorma: [],
    status: 'idle',
    error: null
}


export const crearNormaSlice = createSlice({
    name: "crearNorma",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createRule.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default crearNormaSlice.reducer
