import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


//const url = 'https://gorgeous-tan-earmuffs.cyclic.app/allcodes'
const local = 'http://localhost:3001'

export const createArt = createAsyncThunk(
    'newArticle/createArt',
    async (data) => {
        try{
            const {token} = data
          const response = await axios.post(`${local}/newarticle`, data,
              {
                  headers: {
                      'authorization': token
                  }
              }
              )
            return response.data
        } catch (e) {
            return e.message
        }
    }
)

const initialState = {
    newArticle: [],
    status: "idle",
    error: null
}


export const createArticleSlice = createSlice({
    name: "newArticle",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createArt.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default createArticleSlice.reducer