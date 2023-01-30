import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'
export const traerArticulos = createAsyncThunk(
    'articulos/traerArticulos',
    async (data) => {
        console.log(data)
    try {
        const response = await axios.get(`${local}/articulosnorma/${data.norma}`)
        return response.data
    } catch (e) {
        return e.message
    }
})


const initialState = {
    articulos: [],
    status: 'idle',
    error: null
}

export const traerArticulosSlice = createSlice({
    name: 'articulos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(traerArticulos.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})



export default traerArticulosSlice.reducer