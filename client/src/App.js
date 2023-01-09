import './App.css';
import {useDispatch} from "react-redux";
import { getCodes} from "./features/codes/codesSlice";
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";


const articulos = "ARTÍCULO 1.- La presente Ley es de orden público y de interés social, tiene por objeto establecer las bases generales de la administración pública y funcionamiento de los Ayuntamientos del Estado; así como, fortalecer la autonomía reglamentaria del Municipio, de conformidad con lo dispuesto en los artículos 115 fracción II de la Constitución Política de los Estados Unidos Mexicanos y 115 al 148 de la Constitución Política del Estado.\n" +
    "\n"


function App() {
    const dispatch = useDispatch()
    dispatch(getCodes())

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Main />} />
                <Route path="/article/:code/:id" element={<EditArticle />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
