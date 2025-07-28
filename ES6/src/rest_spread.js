// Função tradicional que recebe dois parâmetros e retorna a soma
function somar(a , b){
    return a + b;
}

console.log(somar(10, 20)); // Saída: 30

// Função sem parâmetros que apenas imprime os argumentos passados
function somar2(){
    console.log(arguments); // 'arguments' é um objeto semelhante a array que contém os parâmetros recebidos
}

console.log(somar2(10, 20, 30)); 
// Saída: [Arguments] { '0': 10, '1': 20, '2': 30 }
// A função não retorna nada, apenas imprime os argumentos

// Função que soma todos os argumentos usando um loop
function somar3() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]; // Acumula os valores
    }

    return soma; // Retorna o total somado
}

console.log(somar3(10, 30, 60)); // Saída: 100

// Função que utiliza o operador REST (...) para receber vários números como array
function somarComRest(...numeros) {
    // Usa reduce para somar todos os itens do array 'numeros'
    const soma4 = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0); // Começa com zero

    return soma4;
}

console.log(somarComRest(10, 8, 90)); // Saída: 108

// Criação de array com números
const numeros = [1, 2, 3, 4, 5];

// O operador SPREAD espalha os valores do array
console.log(...numeros); // Saída: 1 2 3 4 5

// Dois arrays de times de futebol
const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDeRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// Concatenação usando método concat
const timeDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRio);

// Concatenação usando SPREAD
const timeDeFutebol2 = [...timesDeFutebolDeSp, ...timesDeFutebolDeRio];

console.log(timeDeFutebol);  // Saída: array com todos os times
console.log(timeDeFutebol2); // Saída igual à de cima

// Objeto com dados do carro da Julia
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

// Cria novo objeto copiando carroDaJulia e alterando o motor
const carroDaAnA = {
    ...carroDaJulia, // Copia todas as propriedades
    motor: 1.8        // Sobrescreve o motor
}

console.log(carroDaJulia); // Motor 1.6
console.log(carroDaAnA);   // Motor 1.8

// Acesso direto ao valor do motor (forma antiga)
const motorDoCarroDaAna1 = carroDaAnA.motor;

// Desestruturação para extrair o valor da propriedade 'motor' com alias (renomeando)
const { motor: motorDoCarroDaAna } = carroDaAnA;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);    // Saída: 1.8
console.log(motorDoCarroDaJulia);  // Saída: 1.6

// Desestruturação de arrays
const [item1 , item2 , item3 , ...outrosTipos] = timeDeFutebol;

console.log(item1);        // santos
console.log(item2);        // palmeiras
console.log(item3);        // bragantino
console.log(outrosTipos);  // ['são paulo', 'vasco', 'botafogo', 'flamengo', 'fluminense']
