import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const passChange = createAsyncThunk(
    'pass_change/passChange',
    async (data) => {
        const {token} = data

        try{
            const response = await axios.post(`${local}/changepass`, data,
                {
                    headers: {
                        'authorization': token
                    }
                },
            )
            return response.data
        } catch (e) {
            return e
        }
    }
)


const initialState = {
    pass_change: [],
    status: 'idle',
    error: null
}


export const changePasswordSlice = createSlice({
    name: 'pass_change',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(passChange.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default changePasswordSlice.reducer