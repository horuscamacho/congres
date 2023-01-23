import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local ='http://localhost:3001'

export const setArticulo = createAsyncThunk(
    'articuloActual/setArticulo',
    async (data) => {
        try{
            const response = await axios.get(`${local}/articulo/${data}`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)


const initialState = {
    articuloActual: [],
    status: 'idle',
    error: null
}

export const articuloSeleccionadoSlice = createSlice({
    name: 'articuloActual',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(setArticulo.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default articuloSeleccionadoSlice.reducer