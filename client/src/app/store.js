import { configureStore } from '@reduxjs/toolkit'
import codesReducer from "../features/codes/codigosSlice";
import codeSelectedReducer from '../features/codes/codeSelectedSlice'
import articulosReducer from '../features/articulos/articulosSlice'
import articuloReducer from '../features/articulos/articuloSlice'

export const store = configureStore({
    reducer : {
        codigos: codesReducer,
        articulos: articulosReducer,
        articulo: articuloReducer,
        codeSelectd: codeSelectedReducer,

    }
})

