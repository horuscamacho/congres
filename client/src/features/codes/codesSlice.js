import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getCodes = createAsyncThunk(
    'codigos/getCodigosFromBack',
    async () => {
        try {
            const response = await axios.get(`https://gorgeous-tan-earmuffs.cyclic.app/codigos`, )
            return response.data
        }catch (e) {
            console.log(e.message)
        }
    }
)

const initialState = {
    codigos: [],
    status: 'idle',
    error: null
}



export const codesSlice =  createSlice({
    name: "codigos",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCodes.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export const {addCodigos} = codesSlice.actions
export default codesSlice.reducer