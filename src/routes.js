import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home/index.jsx'
import Header from "./component/Header";
import Filme from './pages/Filmes'
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/naoEncontrada/index.jsx";

const Rotas = () => {
    return(
      
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/filme/:id" element={<Filme/>}></Route>
                <Route exact path="/favoritos" element={<Favoritos/>}></Route>
                <Route path="*" element={<NaoEncontrada/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;