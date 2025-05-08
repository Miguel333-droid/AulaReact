 import Exemplo1 from "./Componentes/Exemplo1"
 import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"

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


      </>
     )
}