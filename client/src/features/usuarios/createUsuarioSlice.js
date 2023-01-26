import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const createUser = createAsyncThunk(
    'crearUsuario/createUser',
    async (data) => {
        try{
            const response = await axios.post(`${local}/register`, data)
            return response.data
        } catch (e) {
            return e.message
        }
    }
)



const initialState = {
    crearUsuario: [],
    status: "idle",
    error: null
}


export const createUsuario = createSlice({
    name: "crearUsuario",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default createUsuario.reducer

