 import Exemplo1 from "./Componentes/Exemplo1"
 import Exercicio1 from "./Componentes/Exercicio1"
 import Exercicio2 from "./Componentes/Exercicio2"
 import Exercicio3 from "./Componentes/Exercicio3"
 import Exercicio4 from "./Componentes/Exercicio4"
 import Exercicio5 from "./Componentes/Exercicio5"


export default function App() {
  return (
    <>
      <div>
        <h1>Exercicíos Componenentes</h1>
      </div>
      


     <h3>Chama para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>
      <Exemplo1 numero1={10} numero2={22}/>
      <Exemplo1 numero1={7.5} numero2={2.5}/>
      <Exemplo1 numero1={-58} numero2={2}/>
      <Exemplo1 numero1={84} numero2={2}/>

      <div>
        <h3>Chama para o Exercício 1</h3>
        <Exercicio1 temp="33"/>
      </div>


      <div>
        <h3>Chama para o Exercício 2</h3>
        <Exercicio2 p={64} a={1.80}/>
      </div>

      <div>
        <h3>Chama para Exercício 3</h3>
        <Exercicio3 valor={100} taxa={10} tempo={2}/>
      </div>

      <div>
        <h3>Chama para Exercício 4</h3>
        <Exercicio4 tipo={"t"} base={10} altura={5}/>
        <Exercicio4 tipo={"r"} base={10} altura={5}/>
      </div>

      <div>
        <h3>Chama para Exercício 5</h3>
        <Exercicio5 quantidade = {10}/>
      </div>


      </>
     )
}