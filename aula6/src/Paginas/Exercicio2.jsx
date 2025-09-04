import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio2() {



  const [num1, setNum1] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {

    setResultado(
      <div>

        A temperatura em Celsius é = {Number((num1)-32) * 5/9 } ° <br />
        

      </div>  
    );
  }

  return (
    <div>
      <h1>Exercicio 2</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a temperatura em Fahrenheit para ser convertida em Celsius: <br />
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