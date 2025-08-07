import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudos de Rotas no React</h1>

            <ul>
                <li><Link to = "/SP" >São Paulo</Link></li>
                <li><Link to = "/RJ" >Rio de Janeiro</Link></li>
                <li><Link to = "/SC" >Santa Catarina</Link></li>
                <li><Link to = "/MG" >Minas Gerais</Link></li>
                <li><Link to = "/PR" >Paraná</Link></li>
                <li><Link to = "/ES" >Espírito Santo</Link></li>
                <li><Link to = "/RS" >Rio Grande do Sul</Link></li>
            </ul>
        </div>
    )
}