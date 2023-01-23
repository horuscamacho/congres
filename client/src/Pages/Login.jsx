import React, {useEffect, useState} from 'react';
import LoginForm from "../components/Forms/LoginForm";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Login(props) {
    const usuario = useSelector((state) => state.usuario)
    const navigate = useNavigate()
    const [logged, ] = useState(usuario.value ? usuario.value.token : null);
    useEffect(() => {
           if(logged !== undefined) {
               navigate('/home')
           } else {
               navigate('/')
           }

    }, [logged, navigate]);

    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Login;