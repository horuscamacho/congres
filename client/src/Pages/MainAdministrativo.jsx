import React, {useState} from 'react';
import NavBarLoggeado from "../components/NavBarLoggeado";
import Footer from "../components/Footer";
import FormNewUser from "../components/FormNewUser";

function MainAdministrativo(props) {
    const [accion, setAccion] = useState();




    return (
        <div>
            <NavBarLoggeado setAccion = {setAccion} accion = {accion} />
            <FormNewUser />
            <Footer />
        </div>
    );
}

export default MainAdministrativo;