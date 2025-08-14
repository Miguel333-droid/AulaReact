import { Link } from "react-router-dom";

export default function Sergipe() {
    return(
        <div>
            <h1>Seja Bem-Vido á Sergipe</h1>

            <p>
                <img src="/SE.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}