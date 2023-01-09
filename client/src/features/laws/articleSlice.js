import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getArticle = createAsyncThunk(
    'articleToEdit/getDataFromBack',
    async (data) => {
        const {codigo, article} = data
        try {
            const response = await axios.get(`https://gorgeous-tan-earmuffs.cyclic.app/articulo/${codigo}/${parseInt(article, 10)}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
)

const initialState = {
    articleToEdit: [],
    status: "idle",
    error: null
}


export const articleSlice = createSlice({
    name: "articleToEdit",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getArticle.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})


export default articleSlice.reducer

