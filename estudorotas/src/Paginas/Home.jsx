import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudos de Rotas no React</h1>

            <ul>
            <li><Link to="/AC">Acre</Link></li>
            <li><Link to="/AL">Alagoas</Link></li>
            <li><Link to="/AP">Amapá</Link></li>
            <li><Link to="/AM">Amazonas</Link></li>
            <li><Link to="/BA">Bahia</Link></li>
            <li><Link to="/CE">Ceará</Link></li>
            <li><Link to="/DF">Distrito Federal</Link></li>
            <li><Link to="/ES">Espírito Santo</Link></li>
            <li><Link to="/GO">Goiás</Link></li>
            <li><Link to="/MA">Maranhão</Link></li>
            <li><Link to="/MT">Mato Grosso</Link></li>
            <li><Link to="/MS">Mato Grosso do Sul</Link></li>
            <li><Link to="/MG">Minas Gerais</Link></li>
            <li><Link to="/PA">Pará</Link></li>
            <li><Link to="/PB">Paraíba</Link></li>
            <li><Link to="/PR">Paraná</Link></li>
            <li><Link to="/PE">Pernambuco</Link></li>
            <li><Link to="/PI">Piauí</Link></li>
            <li><Link to="/RJ">Rio de Janeiro</Link></li>
            <li><Link to="/RN">Rio Grande do Norte</Link></li>
            <li><Link to="/RS">Rio Grande do Sul</Link></li>
            <li><Link to="/RO">Rondônia</Link></li>
            <li><Link to="/RR">Roraima</Link></li>
            <li><Link to="/SC">Santa Catarina</Link></li>
            <li><Link to="/SP">São Paulo</Link></li>
            <li><Link to="/SE">Sergipe</Link></li>
            <li><Link to="/TO">Tocantins</Link></li>
            

            </ul>
        </div>
    )
}