import { configureStore } from '@reduxjs/toolkit'
import articulosReducer from '../features/articulos/traerArticulosSlice'
import titulos_articulos from '../features/normas/traerNormasSlice'
import normaActivaReducer from '../features/normas/normaActivaSlice'
import articuloSeleccionadoReducer from '../features/articulos/articuloSeleccionadoSlice'
export const store = configureStore({
    reducer : {
        titulos_normas: titulos_articulos,
        articulos: articulosReducer,
        normaSelected: normaActivaReducer,
        articuloSeleccionado:  articuloSeleccionadoReducer
    }
})

