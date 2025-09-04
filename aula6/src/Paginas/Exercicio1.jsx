import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio1() {



  const [num1, setNum1] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {

    setResultado(
      <div>

        O quadrado do número é = {Number(num1) ** 2} <br />
        O cubo do número é = {Number(num1) ** 3} <br />

      </div>
    );
  }

  return (
    <div>
      <h1>Exercicio 1</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite Qualquer Número: <br />
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
          </p>


          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>

  )

}