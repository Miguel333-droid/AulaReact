export default function Exercicio1({temp}) {
    let total = (Number(temp) - 32 )* 5/9;
   
     return (
        <div>
        A temperatura em Celsius é {total.toFixed(2)}
        </div>
     );
}