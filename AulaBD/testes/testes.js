function consultar (){

    fetch('http://localhost:3001/alunos')
    .then(res => res.json())
    .then(data => {
        console.log("Alunos: ", data);
        document.getElementById("resultado").innerHTML = JSON.stringify(data,null,2);
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao detectar dados da API!";
        console.log(err);
    });
}


function consultarPorCodigo(codigo) {

    fetch('http://localhost:3001/alunos/' + codigo)
    .then(res => res.json())
    .then(data => {
        console.log("Alunos: ", data);
        document.getElementById("resultado").innerHTML = data.message; //JSON.stringify(data,null,2);
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao detectar dados da API!";
        console.log(err);
    });

}


function cadastrar(){

    const aluno = {
        nome :"Duda",
        cidade: "Mococa",
        estado: "SP"
    };

    fetch("http://localhost:3001/alunos/", {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
    
    .then(res => res.json())
    .then(data => {
        
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao detectar dados da API!";
    });

}


function alterar(codigo){
    const AlunoAtualizado = {
        nome: "Miguel Mariano Da Silva",
        cidade: "São Paulo",
        estado: "SP"
    };

fetch(`http://localhost:3001/alunos/${codigo}`, {
        method : "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(AlunoAtualizado)
    })
    
    .then(res => res.json())
    .then(data => {        
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao detectar dados da API!";
    });

}

function excluir(codigo){
    fetch(`http://localhost:3001/alunos/${codigo}` ,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao detectar dados da API!";
    });
}

    


