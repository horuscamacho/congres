import './App.css';
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import MainAdministrativo from "./Pages/MainAdministrativo";
import MainAdmin from "./Pages/MainAdmin";



function App() {
    const datos = JSON.parse(localStorage.getItem('persist:root'))
    console.log(datos)
    console.log(JSON.parse(datos.usuario))

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainAdmin />} />
                <Route path="/home" />
                <Route path="/:norma/:id" element={<EditArticle />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


