"use strict";

// Exemplo antigo usando função construtora para criar objetos Pokemon:
// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }
//
// const pikachu = new Pokemon("Pikachu", "elétrico")

// Nova implementação usando classes:
class Pokemon {
  // Propriedade privada que só pode ser acessada dentro da classe
  #hp = 100;

  // Construtor que define os atributos do Pokémon
  constructor(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }

  // Método para o Pokémon atacar, recebendo o nome do ataque
  atacar(nomeDoAtaque) {
    console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
  }

  // Método que reduz o HP do Pokémon em 10 ao receber um ataque
  recebeuAtaque() {
    this.#hp -= 10;
  }

  // Método que exibe o HP atual do Pokémon
  exibeHp() {
    console.log(this.#hp);
  }
}

// Classe Pikachu que herda de Pokemon
class Pikachu extends Pokemon {
  // Construtor que chama a superclasse (Pokemon) já com os dados fixos do Pikachu
  constructor() {
    super('Pikachu', 'Elétrico');
  }

  // Sobrescreve o método atacar da classe pai para personalizar o ataque do Pikachu
  atacar() {
    console.log(`${this.nome} atacou com choque do trovão`);
  }
}

// Criação de um objeto Pikachu específico chamado "pikachuDoAsh"
const pikachuDoAsh = new Pikachu();

// O Pikachu recebe um ataque, diminuindo seu HP
pikachuDoAsh.recebeuAtaque();

// Tentativa de alterar diretamente o HP (não funciona, pois #hp é privado)
pikachuDoAsh.hp = 5000;

// Exibe undefined, pois a propriedade hp não existe fora da classe
console.log(pikachuDoAsh.hp);

// O Pikachu ataca com o ataque personalizado definido na classe Pikachu
pikachuDoAsh.atacar();

// Exibe o HP atual do Pikachu (deverá estar em 90 após o ataque recebido)
pikachuDoAsh.exibeHp();

// Criação de outro Pokémon usando a classe base
const pikachu = new Pokemon('pikachu', 'elétrico');

// Exibe os objetos criados no console
console.log(pikachu);
console.log(pikachuDoAsh);

// Verifica se pikachuDoAsh é instância de Pikachu (true) e também de Pokemon (true)
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);