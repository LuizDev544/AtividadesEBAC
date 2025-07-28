// Array de objetos com nome e nota
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 7 },
    { nome: "Eduardo", nota: 4 },
    { nome: "Fernanda", nota: 9 }
];

// Função para filtrar alunos com nota >= 6
function filtrarAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
}

// Testando a função
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
