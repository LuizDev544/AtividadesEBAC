"use strict";

// =========================
// MAP
// =========================

// Cria um novo Map (estrutura de chave-valor)
let meuMap = new Map();

// Adiciona chave "nome" com valor "Luiz"
meuMap.set("nome", "Luiz");

// Adiciona chave "stack" com valor em array
meuMap.set("stack", ["html", "css", "js"]);
console.log(meuMap);
// Saída: Map(2) { 'nome' => 'Luiz', 'stack' => [ 'html', 'css', 'js' ] }

// Obtém o valor da chave "nome"
const pegandoNome = meuMap.get("nome");
console.log(pegandoNome); // Luiz

// Tamanho do Map
console.log(meuMap.size); // 2

// Verifica se o Map tem determinadas chaves
console.log(meuMap.has("nome")); // true
console.log(meuMap.has("sobrenome")); // false

// Remove todos os elementos do Map
meuMap.clear();
console.log(meuMap.size); // 0 (foi limpo)

// Os loops abaixo não exibem nada pois o Map está vazio
for (let chave of meuMap.keys()) {
  console.log(chave);
}
for (let valor of meuMap.values()) {
  console.log(valor);
}
for (let entrada of meuMap.entries()) {
  console.log(entrada);
}

// Tenta deletar a chave "stack" (não existe mais)
meuMap.delete("stack");
console.log(meuMap); // Map(0) {}

// =========================
// SET
// =========================

// Cria um Set (conjunto de valores únicos)
const cpfs = new Set();

// Adiciona valores únicos
cpfs.add(2323244444);
cpfs.add(2323347446);
cpfs.add(2323809800);
console.log(cpfs);
// Set(3) { 2323244444, 2323347446, 2323809800 }

// Iteradores do Set
console.log(cpfs.keys()); // [Set Iterator]
console.log(cpfs.values()); // [Set Iterator]

// Percorre os valores do Set
cpfs.forEach(valor => {
  console.log(valor);
});

// =========================
// REMOVER ITENS DUPLICADOS DE UM ARRAY USANDO SET
// =========================

// Array com itens repetidos
const array = ['luix', 'luana', 'jose', 'paula', 'luix'];

// Cria um Set a partir do array para remover duplicatas
const arrayComoSet = new Set([...array]);

// Converte o Set de volta para array sem duplicados
const arraySemItemDuplicados = [...arrayComoSet];
console.log(arrayComoSet); // Set(4) { 'luix', 'luana', 'jose', 'paula' }
console.log(arraySemItemDuplicados); // [ 'luix', 'luana', 'jose', 'paula' ]