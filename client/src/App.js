import './App.css';
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import MainAdministrativo from "./Pages/MainAdministrativo";
import MainAdmin from "./Pages/MainAdmin";
import PrivateRoutes from "./Routes/PrivateRoutes";


function App() {

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<PrivateRoutes />} />
                <Route index element={<Login />} />
                <Route path="/:norma/:id" element={<EditArticle />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


