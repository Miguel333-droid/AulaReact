import { Link } from "react-router-dom";

export default function Piau() {
    return(
        <div>
            <h1>Seja Bem-Vido á Piauí</h1>

            <p>
                <img src="/PI.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}