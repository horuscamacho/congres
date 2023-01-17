import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'
export const titulosNormas = createAsyncThunk(
    'titulos_normas/titulosNormas',
    async (data) => {
        try{
            const response = await axios.get(`${local}/consultarnormas`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)

const initialState = {
    titulos_normas: [],
    status: 'idle',
    error: null
}

export const traerNormasSlice = createSlice({
    name: 'titulos_normas',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(titulosNormas.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default traerNormasSlice.reducer