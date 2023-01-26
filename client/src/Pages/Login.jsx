import React, {useEffect, useState} from 'react';
import LoginForm from "../components/Forms/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ModalLogError from "../components/Modals/ModalLogError";
import {clearStore} from "../features/usuarios/loginUsuarioSlice";
function Login(props) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const usuario = useSelector((state) => state.usuario)
    const navigate = useNavigate()
    const [logged, ] = useState(usuario.value && usuario.value.token ? usuario.value.token : null);
    const loggSuccess = usuario.value && usuario.value.status ? usuario.value : null
    console.log(usuario)
    console.log(logged)


    const setDelay = () => {
        setTimeout(() => {
            dispatch(clearStore())
        }, 5000)
    }

    useEffect(() => {
        if(loggSuccess?.status === 200){
            navigate('/home')
        } else if(loggSuccess?.status) {
            setOpen(true)
            setDelay()
        }
    }, [loggSuccess]);


    return (
        <div>
            <LoginForm />
            <ModalLogError open={open} setOpen={setOpen} text={loggSuccess?.message} />
        </div>
    );
}

export default Login;