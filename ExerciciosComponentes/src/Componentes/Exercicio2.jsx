export default function Exercicio2({p,a}) {
    let IMC = Number(p) /(Number(a**2));

    return (
        <div>
            Seu peso IMC é de {IMC.toFixed(2)}
        </div>
        
        
    );
}