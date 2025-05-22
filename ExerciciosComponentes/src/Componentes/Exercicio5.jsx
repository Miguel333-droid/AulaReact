export default function Exercicio5({quantidade}) {
    let q = Number(quantidade);
  

    return (
        <div>
            Quantidade de consultas {q} <p></p>
            Sálario Bruto: R$ {q * 150} <p></p>
            Desconto INSS: R$ {q * 150 * 0.08} <p></p>
            Sálario Líquido: R$ {q * 150 -(q*150 * 0.08)} <p></p>
        </div>
    )

}