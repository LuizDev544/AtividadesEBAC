"use strict";

// Cria um array com nomes de redes sociais
const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// Percorre o array usando um laço for tradicional
for (let i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social:" + redesSociais[i]);
}

// Percorre o array usando o método forEach, que é mais moderno
redesSociais.forEach(function (item, indice) {
  console.log(indice + "Eu tenho perfil na rede social:" + item);
});

// Cria um array com nomes de alunos
const alunos = ['gustavo', 'julia', 'fernando', 'luiz'];

// Usa o método map para transformar cada item do array
const alunos2 = alunos.map(function (itematual) {
  // Cria um novo objeto para cada aluno com nome e curso
  itematual = {
    nome: itematual,
    curso: 'Frontend'
  };
  return itematual;
});
console.log(alunos2); // Mostra o novo array de objetos com alunos e cursos

// Encontra o primeiro aluno chamado 'fernando'
const paula = alunos2.find(function (item) {
  return item.nome == 'fernando';
});
console.log(paula); // Mostra o objeto do aluno encontrado

// Encontra o índice do aluno chamado 'fernando'
const indiceDapaula = alunos2.findIndex(function (item) {
  return item.nome == 'fernando';
});
console.log(indiceDapaula); // Mostra o índice (posição) do aluno no array

// Adiciona um novo aluno ao array
alunos2.push({
  nome: 'Lucio',
  curso: 'backend'
});

// Verifica se **todos** os alunos são do curso 'Frontend'
const todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend); // false, pois Lucio é de backend

// Verifica se existe **algum** aluno que seja de backend **e** Frontend ao mesmo tempo (isso é impossível)
const existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'backend' && item.curso === 'FrontEnd';
});
console.log(existeAlgumAlunoDeBackend); // false, pois nenhum aluno pode estar nos dois cursos ao mesmo tempo

// Função que filtra apenas os alunos de backend
function filtarAlunosDeBackend(aluno) {
  return aluno.curso === 'backend';
}

// Filtra os alunos de backend usando a função acima
const alunosDeBackend = alunos2.filter(filtarAlunosDeBackend);
console.log(alunosDeBackend); // Mostra apenas os alunos do curso 'backend'

// Cria um array de números
const nums = [10, 20, 30, 10];

// Usa reduce para somar todos os números do array
const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual; // Soma itemAtual ao acumulador
  return acumulador;
}, 0); // Começa com acumulador em 0

console.log(soma); // Mostra o resultado da soma

// Usa reduce para concatenar os nomes dos alunos em uma única string
const nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual.nome;
  return acumulador;
}, ''); // Começa com uma string vazia

console.log(nomeDosAlunos); // Exibe todos os nomes colados em uma única string