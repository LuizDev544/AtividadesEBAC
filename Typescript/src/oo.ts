// Define a classe 'Pessoa'
class Pessoa {
    nome: string;        // Propriedade obrigatória: nome da pessoa (tipo string).
    renda?: number;      // Propriedade opcional: renda da pessoa (tipo number).

    // Construtor que inicializa os atributos da classe.
    constructor(nome: string, renda?: number) {
        this.nome = nome;    // Atribui o valor recebido para 'nome'.
        this.renda = renda;  // Atribui o valor recebido para 'renda' (pode ser indefinido).
    }

    // Método que retorna uma saudação com o nome da pessoa.
    dizOla(): string {
        return `${this.nome} disse oi`;  
    }
}

// Define a classe 'ContaBancaria'
class ContaBancaria {
    protected saldo: number = 0;  // Propriedade protegida: só acessível dentro da classe e subclasses.
    public numeroConta: number;   // Propriedade pública: acessível de qualquer lugar.

    // Construtor que recebe o número da conta e o inicializa.
    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    // Método estático: pode ser chamado sem criar uma instância da classe.
    static retornaNumerosDoBanco() {
        return 125;  // Retorna um número fixo (exemplo).
    }

    // Método privado: só pode ser acessado dentro da própria classe.
    private getSaldo() {
        return this.saldo;
    }

    // Método público para depositar dinheiro na conta.
    depositar(valor: number) {
        this.saldo += valor;  // Adiciona o valor ao saldo atual.
    }
}

// Define a classe 'ContaBancariaPessoaFisica' que herda de 'ContaBancaria'
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescreve (override) o método 'depositar' da classe pai.
    depositar(valor: number): void {
        // Aqui, em vez de somar ao saldo, substitui pelo dobro do valor informado.
        this.saldo = valor * 2;
    }
}

// Cria uma nova conta para "Pedro", utilizando a classe filha.
const contaPedro = new ContaBancariaPessoaFisica(1234);

// Chama o método estático da classe 'ContaBancaria' sem precisar criar uma instância.
ContaBancaria.retornaNumerosDoBanco();
