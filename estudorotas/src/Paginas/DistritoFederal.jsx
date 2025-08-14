import { Link } from "react-router-dom";

export default function DistritoFederal() {
    return(
        <div>
            <h1>Seja Bem-Vido ao Distrito Federal</h1>

            <p>
                <img src="/DF.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}