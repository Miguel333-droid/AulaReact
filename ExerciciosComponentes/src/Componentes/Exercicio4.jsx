export default function Exercicio4({tipo,base,altura}) {

    
    if (tipo == "r") {
        let total = Number(base * altura);

        return(
        <div>A área do retangulo é {total}</div>
        );
    } else if (tipo == "t") {
        let total = Number(base*altura / 2);
        return (
        <div>A área do triangulo é {total}</div>
        )
    } else {
        return (
        <div>Tipo inválido valor = 0</div>
        )
    }
    

}