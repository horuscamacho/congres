import Footer from "../components/Footer";
//import NavBar from "../components/NavBar";
import DropLaw from "../components/DropLaw";
import LawList from "../components/LawList";
//import Buscador from "../components/Buscador";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {titulosNormas} from "../features/normas/traerNormasSlice";
import NavBarLoggeado from "../components/NavBarLoggeado";

function Main() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(titulosNormas())
    }, );



    return (
        <div>
            <NavBarLoggeado />
            {/* <Buscador /> */}
            <div className="  md:px-48 md:py-12 ">
                <DropLaw />
            </div>
            <LawList />
            <Footer/>
        </div>
    );
}

export default Main;