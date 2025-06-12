export default function Exercicio4({cor}) {

    return (
        <div>
            <h2 style={{border:"2px solid " + cor, textAlign:"Center"}}>Execício 4 - Estilos CSS no React</h2>

            <p style={{color: cor}}>Este paragráfo está na cor {cor} </p>
        </div>
    )
}