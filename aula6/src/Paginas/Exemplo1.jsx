import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo1() {
    const [nome, setNome] = useState("Miguel");
    const [idade, setIdade] = useState(18);
    const [resultado, setResultado] = useState(null);

    function calcular() {
        let dias = Number(idade) * 365;
        setResultado("Olá " + nome + ", você já viveu " + dias + " dias");
    }

    function limpar() {
        setNome("");
        setIdade("");
        setResultado("");
    }

    return (
        <div>
            <h1>Exemplo 1</h1>

            <div className="container" style={{ position: "relative" }}>
                <form style={{ padding: "20px" }}>

                    <p>
                        Digite o nome do aluno <br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome" />
                    </p>

                    <p>
                        Digite a idade do aluno <br />
                        <input type="number" value={idade} min={0} max={100} onChange={(e) => setIdade(e.target.value)} placeholder="Digite a Idade" />
                    </p>

                    <p>
                        <input type="button" value="Exemplo 1" onClick={calcular} />
                        <input type="button" value="Limpar" onClick={limpar} />
                    </p>

                    <p>
                        <Link to="/">
                        <input type="button" value="Voltar para Home" style={{
                            position: "absolute", 
                            bottom: "20px", 
                            right: "20px"
                        }} />
                        </Link>
                    </p>

                    <p>
                        <b>Resultados:</b><br />
                        Nome: {nome} <br />
                        Idade: {idade}
                    </p>

                    <p>
                        {resultado}
                    </p>
                </form>
            </div>
        </div>
    );
}
