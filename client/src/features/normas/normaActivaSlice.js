import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ""
}
export const normaActivaSlice = createSlice({
    name: 'normaSelected',
    initialState,
    reducers: {
        setNormaSelected: (state, action) => {
            state.value = action.payload
        }
    }
})


export const {setNormaSelected} = normaActivaSlice.actions

export default normaActivaSlice.reducer