// Função arrow simples que retorna a string "Diz olá"
const minhaFuncao = () => "Diz olá";

// Função arrow que retorna um objeto com modelo e fabricante
const retornaUmCarro = () => ({
    modelo: 'KA',
    fabricante: 'Ford'
})

// Chama e imprime o retorno das duas funções acima
console.log(minhaFuncao());        // Saída: Diz olá
console.log(retornaUmCarro());     // Saída: { modelo: 'KA', fabricante: 'Ford' }

// Objeto carro com uma propriedade e dois métodos
const carro = {
    vaelocidadeAtual: 40, // velocidade inicial

    // Método tradicional: acessa corretamente o this
    acelerar: function() {
        this.vaelocidadeAtual += 10; // aumenta a velocidade em 10
    },

    // ⚠️ Método como arrow function: NÃO acessa o this do objeto corretamente
    frear: () => {
        // 'this' aqui NÃO se refere ao objeto carro, e sim ao contexto global
        this.vaelocidadeAtual -= 10;
    }
}

// Executa os métodos
carro.acelerar(); // Funciona corretamente: velocidade vai para 50
carro.frear();    // ⚠️ Não funciona como esperado: não altera a velocidade

console.log(carro.vaelocidadeAtual); // Saída: 50 (e não 40, como esperado)
