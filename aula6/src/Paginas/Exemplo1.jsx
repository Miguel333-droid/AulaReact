import {Link} from "react-router-dom";
import {useState} from "react";

export default  function Exemplo1() {
    const [nome, setNome] = useState("Miguel");
    const [idade,setIdade] = useState(18);


    return(
        <div>
            <h1>Exemplo1</h1>

            <div className="container">
            <form style={{padding: "20px"}}>

                <p>
                    Digite o nome do aluno <br />
                    <input type="text" value = {nome} onChange = { (e) => setNome(e.target.value)} placeholder="Digite o Nome" />
                </p>

                <p>
                    Digite o idade do aluno <br />
                    <input type="number" value = {idade} min={0} max={100} onChange = { (e) => setIdade(e.target.value)} placeholder="Digite a Idade" />
                </p>


                <p>
                    <input type="button" value="Exemplo 1" style={{marginRight: "10px"}}/>
                    <input type="button" value="Limpar"/>
                </p>

                <p>
                    <b>Resultados:</b><br />
                    Nome: {nome}
                </p>
            </form>
            </div>
            
            
        </div>
        
    )
}