import { configureStore } from '@reduxjs/toolkit'
import codesReducer from "../features/codes/codesSlice";
import codeSelectedReducer from '../features/codes/codeSelectedSlice'
import articleReducer from '../features/laws/articleSlice'

export const store = configureStore({
    reducer : {
        codigos: codesReducer,
        codeSelectd: codeSelectedReducer,
        articleToEdit: articleReducer
    }
})

