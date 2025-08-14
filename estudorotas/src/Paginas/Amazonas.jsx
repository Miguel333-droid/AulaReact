import { Link } from "react-router-dom";

export default function Amazonas() {
    return(
        <div>
            <h1>Seja Bem-Vido á Amazonas</h1>

            <p>
                <img src="/AM.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}