import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'


export const updateUser = createAsyncThunk(
    'actualizarUsuario/updateUser',
    async (data) => {
        try {
          const response = await axios.post(`${local}/edituser`, data)
          return response.data
        } catch (e) {
          return e.message
        }
    }
)

const initialState = {
    updateUser: [],
    status: 'idle',
    error: null
}

export const updateUsuario = createSlice({
    name: "actualizarUsuario",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default updateUsuario.reducer