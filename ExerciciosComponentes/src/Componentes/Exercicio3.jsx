export default function Exercicio3({valor, taxa , tempo}) {

    let total = Number(valor + (valor*(taxa**2/100)*tempo));

    return (
        <div>Valor da parcela em atraso é {total}</div>
    );
    
}