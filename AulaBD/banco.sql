Create database aulabd;
use aulabd;

Create table alunos(
codigo int key auto_increment,
nome varchar(50),
cidader varchar(50),
estado varchar(2));

select *  from alunos;

insert into alunos (nome,cidade,estado)values ("Miguel", "Arceburgo","MG");
INSERT INTO alunos VALUES (NULL, "Guilherme", "Mococa", "SP");



