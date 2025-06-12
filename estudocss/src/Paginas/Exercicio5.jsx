export default function Exercicio5({n1,n2}) {
   const a = {
    color : "white",
    backgroundColor: "blue"
   };

   const r = {
    color : "white",
    backgroundColor: "red"
   };

   let media = (Number(n1) + Number(n2) )/ 2;

   if (media >= 6) {
    return (
        <div>
            <p>O componente <span style={{fontWeight: "bold"}}>Exercício 5</span> recebe dois parametros referente a nota1 e nota 2, calcule a média arítimetica, e verifique
                se o aluno está aprovado ou repovado.Para esttar aprovado é nescessário média 6 ou superior.
            </p>
            <p style={{fontStyle:"italic"}}>Note que este paragrafo está justificado.</p>
            <p>Nota 1:{n1}</p>
            <p>Nota 2:{n2}</p>
            <p>Media{media}</p>
            <p><span style={a}>Aprovado</span></p>
        </div>
    )} else {
        return (
            <div>
            <p>O componente <span style={{fontWeight: "bold"}}>Exercício 5</span> recebe dois parametros referente a nota1 e nota 2, calcule a média arítimetica, e verifique
                se o aluno está <span style={a}>Aprovado</span> ou <span style={r}>Reprovado</span>.Para esttar aprovado é nescessário média 6 ou superior.
            </p>
            <p style={{fontStyle:"italic"}}>Note que este paragrafo está justificado.</p>
            <p>Nota 1:{n1}</p>
            <p>Nota 2:{n2}</p>
            <p> Media{media}</p>
            <p><span style={r}>Reprovado</span></p>
            </div>

        )
        }
    }
