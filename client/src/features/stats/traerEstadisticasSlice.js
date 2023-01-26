import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const getStats = createAsyncThunk(
    'taerstats/getStats',
    async (data) => {
        try{
            const response = await axios.get(`${local}/getAllStats`)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)

const initialState = {
    traerstats: [],
    status: 'idle',
    error: null
}

export const traerEstadisticas = createSlice({
    name: "traerstats",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getStats.fulfilled, (state, action)=> {
            state.value = action.payload
        })
    }
})


export default traerEstadisticas.reducer