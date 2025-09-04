import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio3() {



  const [num1, setNum1] = useState(0);
  const [juros, setJuros] = useState(0);
  const [dias, setDias] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {

    setResultado(
      <div>

        Valor da Parcela atualizado = {Number(num1) + (num1 * (juros**2/100) * dias) } <br />
        

      </div>  
    );
  }

  return (
    <div>
      <h1>Exercicio 3</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da Prestação: <br />
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
          </p>

          <p>
            Digite o valor do Juros em atraso: <br />
            <input type="number" value={juros} onChange={e => setJuros(e.target.value)} />
          </p>


          <p>
            Digite o tempo(em dias) de atraso: <br />
            <input type="number" value={dias} onChange={e => setDias(e.target.value)} />
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