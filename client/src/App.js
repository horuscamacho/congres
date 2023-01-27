import './App.css';
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
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


