import { Link } from "react-router-dom";

export default function RioGrandeNorte() {
    return(
        <div>
            <h1>Seja Bem-Vido ao Rio Grande do Norte</h1>

            <p>
                <img src="/RN.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}