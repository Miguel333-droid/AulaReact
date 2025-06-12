
import Exercicio1 from "./Paginas/Exercicio1"
import Exercicio2 from "./Paginas/Exercicio2"
import Exercicio3 from "./Paginas/Exercicio3"
import Exercicio4 from "./Paginas/Exercicio4"
import Exercicio5 from "./Paginas/Exercicio5"
function App() {
  return (
    <>

    <h1>Estudo do CSS no React</h1>

    <Exercicio1/><p></p>
    <hr />
    <Exercicio2/>
    <hr />
    <Exercicio3/>
    <hr />
    <Exercicio4 cor="red"/>
    <hr />
    <Exercicio4 cor="blue"/>
    <hr />
    <Exercicio4 cor="green"/>
    <hr />
    <Exercicio4 cor="magenta"/>
    <hr />
    <Exercicio5 n1 = "5"  n2 = "5"/>
    <hr />
    <Exercicio5 n1 = "9"  n2 = "10"/>
    <hr />
    </>
      
  )
}

export default App