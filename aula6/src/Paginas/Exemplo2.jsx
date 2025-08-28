
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo2() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [operacao, setOperacao] = useState("soma");

  function calcular() {
    let soma = Number(n1) + Number(n2);
    let subtracao = Number(n1) - Number(n2);
    let multiplicacao = Number(n1) * Number(n2);
    let divisao = Number(n1) / Number(n2);

    switch (operacao) {
      case "soma":
        setResultado("A soma de " + n1 + " e " + n2 + " é = " + soma + ".");
        break;
      case "subtracao":
        setResultado("A subtração de " + n1 + " e " + n2 + " é = " + subtracao + ".");
        break;
      case "multiplicacao":
        setResultado("A multiplicação de " + n1 + " e " + n2 + " é = " + multiplicacao + ".");
        break;
      case "divisao":
        setResultado("A divisão de " + n1 + " e " + n2 + " é = " + divisao + ".");
        break;
      default:
        setResultado("Operação inválida.");
    }
  }

  function limpar() {
    setN1(0);
    setN2(0);
    setResultado(null);
  }

  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="container" style={{ position: "relative" }}>
        <form>
          <p>
            Digite o Número 1 <br />
            <input type="number" placeholder="Digite o número 1" value={n1} onChange={(e) => setN1(e.target.value)} />
          </p>
          <p>
            Digite o Número 2 <br />
            <input type="number" placeholder="Digite o número 2" value={n2} onChange={(e) => setN2(e.target.value)} />
          </p>
          <p>
            Escolha a operação <br />
            <select onChange={(e) => setOperacao(e.target.value)} value={operacao}>
              <option value="soma">Soma</option>
              <option value="subtracao">Subtração</option>
              <option value="multiplicacao">Multiplicação</option>
              <option value="divisao">Divisão</option>
            </select>
          </p>
          <p style={{ textAlign: "center" }}>
            <input type="button" value="Calcular" onClick={calcular} />
            <input type="button" value="Limpar" onClick={limpar} />
          </p>

          {/* Botão Voltar para Home ajustado */}
          <p>
            <Link to="/">
              <input
                type="button"
                value="Voltar para Home"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                }}
              />
            </Link>
          </p>

          <p>
            <b>Resultado:</b> <br />
            {resultado}
          </p>
        </form>
      </div>
    </div>
  );
}
