"use strict";
// Cria um array chamado 'alunos' que contém objetos do tipo 'aluno'.
const alunos = [
    {
        nome: "Carlos",
        curso: ["Front-end", "UX/UI"], // Carlos está matriculado em dois cursos.
        idade: 27,
    },
    {
        nome: "Ana",
        curso: ["Front-end", "Python"], // Ana também tem dois cursos.
        idade: 23,
    },
];
// Adiciona um novo objeto do tipo 'aluno' ao array 'alunos' usando o método push().
alunos.push({
    nome: "julia",
    curso: ["Arquiquetura"], // Julia está matriculada apenas em um curso.
    idade: 29
});
// Declara uma constante 'novoAluno' que também é do tipo 'aluno'.
// Note que aqui não foi informado o campo "curso" (ele é opcional, por isso é permitido).
const novoAluno = {
    nome: "Luca",
    idade: 32,
};
// Função que recebe um parâmetro 'aluno' do tipo 'aluno' e exibe apenas seu nome no console.
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
