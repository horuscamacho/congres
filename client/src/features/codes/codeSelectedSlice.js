import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    'codigoActual/getDataFromBack',
    async (data) => {
        try {
            const response = await axios.get(`https://gorgeous-tan-earmuffs.cyclic.app/${data}`, data)
            return response.data
        }catch (e) {
            console.log(e.message)
        }
    }
)


const initialState = {
    codigoActual: [],
    status: 'idle',
    error: null
}


export const codeSelectedSlice = createSlice({
    name: "codigoActual",
    initialState,
    reducers: {
        codeSelected: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default codeSelectedSlice.reducer
