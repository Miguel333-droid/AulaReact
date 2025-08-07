import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home"
import SaoPaulo from "./Paginas/SaoPaulo"
import EspiritoSanto from "./Paginas/EspiritoSanto"
import MinasGerais from "./Paginas/MinasGerais"
import Parana from "./Paginas/Parana"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import RioJaneiro from "./Paginas/RioJaneiro"
import SantaCatarina from "./Paginas/SantaCatarina"




export default function App()
{
    return (
        <div>
            <BrowserRouter>
             <Routes>

                 
                <Route path="/" element = {<Home />} />
                <Route path="/SP" element = {<SaoPaulo />} />
                <Route path="/MG" element = {<MinasGerais />} />
                <Route path="/PR" element = {<Parana />} />
                <Route path="/ES" element = {<EspiritoSanto />} />
                <Route path="/RS" element = {<RioGrandeSul />} />
                <Route path="/RJ" element = {<RioJaneiro />} />
                <Route path="/SC" element = {<SantaCatarina />} />

             </Routes>
            </BrowserRouter>
            
        </div>
    );
}