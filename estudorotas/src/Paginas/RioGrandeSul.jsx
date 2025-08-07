import { Link } from "react-router-dom";

export default function RioGrandeSul() {
    return(
        <div>
            <h1>Seja Bem-Vido ao Rio Grande do Sul</h1>
            <p>
                <img src="/RS.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}