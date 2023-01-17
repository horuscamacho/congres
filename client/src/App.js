import './App.css';
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Main from "./Pages/Main";
import Login from "./Pages/Login";
import MainAdministrativo from "./Pages/MainAdministrativo";





function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<MainAdministrativo />} />
                <Route path="/:norma/:id" element={<EditArticle />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


