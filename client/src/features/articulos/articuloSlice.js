import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getArticulo = createAsyncThunk(
    'articulo/getArticulo',
    async (data) => {
        try{
            const response = await axios.get(`http://localhost:3001/articulo/${data}`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)

const initialState = {
    articulo: [],
    status: 'idle',
    error: null
}

export const articuloSlice = createSlice({
    name: 'articulo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getArticulo.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default articuloSlice.reducer


