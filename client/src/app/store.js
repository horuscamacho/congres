import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import thunk from "redux-thunk";
import articulosReducer from '../features/articulos/traerArticulosSlice'
import titulos_normasReducer from '../features/normas/traerNormasSlice'
import normaActivaReducer from '../features/normas/normaActivaSlice'
import articuloSeleccionadoReducer from '../features/articulos/articuloSeleccionadoSlice'
import usuarioLoginReducer from '../features/usuarios/loginUsuarioSlice'
import crearUsuarioReducer from '../features/usuarios/createUsuarioSlice'
import crearNormaSlice from '../features/normas/crearNormaSlice'
import changePasswordSlice from "../features/usuarios/changePasswordSlice";
import bringAllUsersSlice from "../features/usuarios/bringAllUsersSlice"
import updateUsuarioSlice from "../features/usuarios/updateUsuarioSlice";
import traerEstadisticasSlice from "../features/stats/traerEstadisticasSlice";
import createArticleReducer from '../features/articulos/createArticleSlice'

import {CookieStorage} from "redux-persist-cookie-storage";
import Cookies from 'cookies-js'

const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies, {}),
    whitelist: ['titulos_normas', 'usuario'],
    timeout: null
}

const rootReducer = combineReducers({
    usuario: usuarioLoginReducer,
    titulos_normas: titulos_normasReducer,
    articulos: articulosReducer,
    normaSelected: normaActivaReducer,
    articuloSeleccionado:  articuloSeleccionadoReducer,
    crearUsuario: crearUsuarioReducer,
    crearNorma: crearNormaSlice,
    pass_change: changePasswordSlice,
    traerUsuarios: bringAllUsersSlice,
    updateUser: updateUsuarioSlice,
    traerstats: traerEstadisticasSlice,
    newArticle: createArticleReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer : persistedReducer,
    middleware: [thunk],
});



