import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './pages/Home/index.jsx'
import Header from "./component/Header";


const Rotas = () => {
    return(
      
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;