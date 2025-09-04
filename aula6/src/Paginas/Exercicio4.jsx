import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio4() {



  const [base, setBase] = useState(0);
  const [al, setAl] = useState(0);
  
  const [resultado, setResultado] = useState('');


  function calcular() {

    setResultado(
      <div>

        A area do triangulo é = {Number(base * al) / 2 } <br />
        

      </div>  
    );
  }

  return (
    <div>
      <h1>Exercicio 4</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da Base do triangulo: <br />
            <input type="number" value={base} onChange={e => setBase(e.target.value)} />
          </p>

          <p>
            Digite o valor da Altura do triangulo: <br />
            <input type="number" value={al} onChange={e => setAl(e.target.value)} />
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