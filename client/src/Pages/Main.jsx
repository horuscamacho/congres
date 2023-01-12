import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DropLaw from "../components/DropLaw";
import LawList from "../components/LawList";
import Buscador from "../components/Buscador";

function Main(props) {

    return (
        <div>
            <NavBar />
            <Buscador />
            <div className="  md:px-48 md:py-12 ">
                <DropLaw />
            </div>
            <LawList />
            <Footer/>
        </div>
    );
}

export default Main;