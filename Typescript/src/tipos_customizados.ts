// Define um "type" chamado 'aluno' que descreve a estrutura de um objeto do tipo aluno.
type aluno = {
    nome: string;        // Propriedade obrigatória: nome do aluno, que é uma string.
    curso?: string[];    // Propriedade opcional: lista de cursos (array de strings). O "?" indica que pode estar ausente.
    idade: number;       // Propriedade obrigatória: idade do aluno, que é um número.
}

// Cria um array chamado 'alunos' que contém objetos do tipo 'aluno'.
const alunos: aluno[] = [
    {
        nome: "Carlos",
        curso: ["Front-end", "UX/UI"],  // Carlos está matriculado em dois cursos.
        idade: 27,
    },
    {
        nome: "Ana",
        curso: ["Front-end", "Python"], // Ana também tem dois cursos.
        idade: 23,
    },
]

// Adiciona um novo objeto do tipo 'aluno' ao array 'alunos' usando o método push().
alunos.push({
    nome: "julia",
    curso: ["Arquiquetura"],  // Julia está matriculada apenas em um curso.
    idade: 29
})

// Declara uma constante 'novoAluno' que também é do tipo 'aluno'.
// Note que aqui não foi informado o campo "curso" (ele é opcional, por isso é permitido).
const novoAluno: aluno = {
    nome: "Luca",
    idade: 32,
}

// Função que recebe um parâmetro 'aluno' do tipo 'aluno' e exibe apenas seu nome no console.
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}
