import { Link } from "react-router-dom";

export default function SantaCatarina() {
    return(
        <div>
            <h1>Seja Bem-Vido á Santa Catarina</h1>

            <p>
                <img src="/SC.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}