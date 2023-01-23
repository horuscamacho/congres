import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {titulosNormas} from "../features/normas/traerNormasSlice";
import NavBarLoggeado from "../components/NavBarLoggeado";

function Main() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.usuario.value.token)

    useEffect(() => {
      dispatch(titulosNormas(token))
    }, );



    return (
        <div>
            <NavBarLoggeado />
            {/* <Buscador /> */}
            {/*   <div className="  md:px-48 md:py-12 ">
                <DropLaw />
            </div>
            <LawList /> */}
            <Footer/>
        </div>
    );
}

export default Main;