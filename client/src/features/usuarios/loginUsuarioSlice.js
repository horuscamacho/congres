import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const intentarLog = createAsyncThunk(
    'usuario/intentarLog',
    async(data) => {
        try{
            const response = await axios.get(`${local}/login`, data)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)


const initialState = {
    usuario: [],
    status: 'idle',
    error: null
}

export const loginUsuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(intentarLog.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default loginUsuarioSlice.reducer