import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getArticulos = createAsyncThunk(
    'articulos/getArticulos',
    async (data) => {
        if(parseInt(data, 10) === 1) return
        try {
            const response = await axios.get(`http://localhost:3001/codigos/${data}`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)


const initialState = {
    articulos: [],
    status: 'idle',
    error: null
}

export const articulosSlice = createSlice({
    name: "articulos",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getArticulos.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})



export default articulosSlice.reducer