import { Link } from "react-router-dom";

export default function Rondonia() {
    return(
        <div>
            <h1>Seja Bem-Vido á Rondônia</h1>

            <p>
                <img src="/RO.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}