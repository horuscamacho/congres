import React from 'react';
import MainAdmin from "../Pages/MainAdmin";
import {useSelector} from "react-redux";
import GoToLoggin from "../Pages/GoToLoggin";
import MainCompleto from "../Pages/MainCompleto";
import MainHistory from "../Pages/MainHistory";







function PrivateRoutes() {
    const usuario = useSelector((state) => state.usuario)

    return (
        <>
            {usuario.value && usuario.value.admin ? <MainAdmin /> : null}
            {usuario.value && usuario.value.permisos === "Completo" ? <MainCompleto /> : null}
            {usuario.value && usuario.value.permisos === "Historial" ? <MainHistory /> : null}
            {usuario.value && usuario.value.token === undefined ? <GoToLoggin /> : null}
        </>
    )
}

export default PrivateRoutes;