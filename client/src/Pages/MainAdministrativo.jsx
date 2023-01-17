import React, {useState} from 'react';
import NavBarLoggeado from "../components/NavBarLoggeado";
import Footer from "../components/Footer";
import FormNewUser from "../components/FormNewUser";
import FoliosList from "../components/FoliosList";
import Reportes from "../components/Reportes";

function MainAdministrativo(props) {
    const [accion, setAccion] = useState();

    return (
        <div>
            <NavBarLoggeado setAccion = {setAccion} accion = {accion} />
            {accion === 'usuario' ? <FormNewUser /> : null}
            {accion === 'folios' ? <FoliosList /> : null}
            {accion === 'reportes' ? <Reportes /> : null }
        </div>
    );
}

export default MainAdministrativo;