import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getCodigos = createAsyncThunk(
    'codigos/getCodigos',
    async (data) => {
    try{
        const response = await axios.get('https://gorgeous-tan-earmuffs.cyclic.app/allcodes')
        return response.data
    } catch (e) {
        return e.message
    }
})

const initialState = {
    codigos: [],
    status: 'idle',
    error: null
}

export const codigosSlice = createSlice( {
    name: "codigos",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCodigos.fulfilled, (state, action) => {

            state.value = action.payload
        })
    }
})


export default codigosSlice.reducer


