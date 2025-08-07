import { Link } from "react-router-dom";

export default function MinasGerais() {
    return(
        <div>
            <h1>Seja Bem-Vido á Minas Gerais</h1>

            <p>
                <img src="/MG.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}