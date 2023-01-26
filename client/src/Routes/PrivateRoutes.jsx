import React, {useEffect, useState} from 'react';
import MainAdmin from "../Pages/MainAdmin";
import {useSelector} from "react-redux";
import GoToLoggin from "../Pages/GoToLoggin";
import MainCompleto from "../Pages/MainCompleto";
import MainHistory from "../Pages/MainHistory";
import Loader from "../components/loader/Loader";








function PrivateRoutes() {
    const [logged, setLogged] = useState(true);


    const usuario = useSelector((state) => state.usuario)

    useEffect(() => {
        isLogged()
    }, []);


    const isLogged = () => {
        setTimeout(()=>{
            if(usuario.value.token){
                setLogged(true)
            } else setLogged(false)
        }, 2000)
    }

    console.log(logged)
    console.log(usuario)

    return (
        <>
            {usuario.value && usuario.value.admin ? <MainAdmin /> : null}
            {usuario.value && usuario.value.permisos === "Completo" ? <MainCompleto /> : null}
            {usuario.value && usuario.value.permisos === "Historial" ? <MainHistory /> : null}
            {usuario.value && usuario.value.token === undefined ? <Loader /> : null}
            {logged === false ? <GoToLoggin/> : null}
        </>
    )
}

export default PrivateRoutes;