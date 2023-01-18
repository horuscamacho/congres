import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import thunk from "redux-thunk";
import articulosReducer from '../features/articulos/traerArticulosSlice'
import titulos_normasReducer from '../features/normas/traerNormasSlice'
import normaActivaReducer from '../features/normas/normaActivaSlice'
import articuloSeleccionadoReducer from '../features/articulos/articuloSeleccionadoSlice'
import usuarioLoginReducer from '../features/usuarios/loginUsuarioSlice'
import crearUsuarioReducer from '../features/usuarios/createUsuarioSlice'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['titulos_normas', 'usuario']
}

const rootReducer = combineReducers({
    usuario: usuarioLoginReducer,
    titulos_normas: titulos_normasReducer,
    articulos: articulosReducer,
    normaSelected: normaActivaReducer,
    articuloSeleccionado:  articuloSeleccionadoReducer,
    crearUsuario: crearUsuarioReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: [thunk]
})

