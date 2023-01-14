import './App.css';
import {useDispatch} from "react-redux";
import EditArticle from "./Pages/EditArticle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import {getCodigos} from "./features/codes/codigosSlice";




function App() {
    const dispatch = useDispatch()
    dispatch(getCodigos())

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Main />} />
                <Route path="/article/:id" element={<EditArticle />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
