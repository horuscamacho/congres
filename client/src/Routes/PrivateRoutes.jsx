import React from 'react';
import MainAdmin from "../Pages/MainAdmin";
import Main from "../Pages/Main";
import MainAdministrativo from "../Pages/MainAdministrativo";






function PrivateRoutes() {
    const datos = JSON.parse(localStorage.getItem('persist:root'))
    const usuario = datos ? JSON.parse(datos.usuario) : null
    const value = usuario?.value
    console.log(value)
    return (
        <>
            {value && value.admin ? <MainAdmin /> : null}
            {value && value.permisos === "Completo" ? <Main /> : null}
        </>
    )
}

export default PrivateRoutes;