"use strict";
// Define a classe 'Pessoa'
class Pessoa {
    // Construtor que inicializa os atributos da classe.
    constructor(nome, renda) {
        this.nome = nome; // Atribui o valor recebido para 'nome'.
        this.renda = renda; // Atribui o valor recebido para 'renda' (pode ser indefinido).
    }
    // Método que retorna uma saudação com o nome da pessoa.
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
// Define a classe 'ContaBancaria'
class ContaBancaria {
    // Construtor que recebe o número da conta e o inicializa.
    constructor(numeroDaConta) {
        this.saldo = 0; // Propriedade protegida: só acessível dentro da classe e subclasses.
        this.numeroConta = numeroDaConta;
    }
    // Método estático: pode ser chamado sem criar uma instância da classe.
    static retornaNumerosDoBanco() {
        return 125; // Retorna um número fixo (exemplo).
    }
    // Método privado: só pode ser acessado dentro da própria classe.
    getSaldo() {
        return this.saldo;
    }
    // Método público para depositar dinheiro na conta.
    depositar(valor) {
        this.saldo += valor; // Adiciona o valor ao saldo atual.
    }
}
// Define a classe 'ContaBancariaPessoaFisica' que herda de 'ContaBancaria'
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescreve (override) o método 'depositar' da classe pai.
    depositar(valor) {
        // Aqui, em vez de somar ao saldo, substitui pelo dobro do valor informado.
        this.saldo = valor * 2;
    }
}
// Cria uma nova conta para "Pedro", utilizando a classe filha.
const contaPedro = new ContaBancariaPessoaFisica(1234);
// Chama o método estático da classe 'ContaBancaria' sem precisar criar uma instância.
ContaBancaria.retornaNumerosDoBanco();
