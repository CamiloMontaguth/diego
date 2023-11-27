import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/carousel/carrusel.jsx';
import Articulo from "./components/articulo/articulo.jsx";
import Footer from "./components/footer/footer.jsx";
import BasicExample from "./components/header/header.tsx";
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/articulo/Page";
import "boxicons";
function App() {
    return (
        <div className="App">
            <Router>
                <BasicExample />
                <Pages/>
            </Router>
            <div>
                <MyCarousel />
            </div>
            <div>
                <Articulo/>

            </div>
            <footer>
                <Footer/>
            </footer>
        </div>


    );
}

export default App;
