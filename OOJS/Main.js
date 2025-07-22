// Classe base (abstração)
class Animal {
    constructor(nome) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.nome = nome;
    }

    fazerSom() {
        throw new Error("Método abstrato 'fazerSom()' deve ser implementado.");
    }
}

// Classe filha 1
class Cachorro extends Animal {
    fazerSom() {
        return `${this.nome} diz: Au Au!`;
    }
}

// Classe filha 2
class Gato extends Animal {
    fazerSom() {
        return `${this.nome} diz: Miau!`;
    }
}

// Instâncias de objetos
const dog1 = new Cachorro("Rex");
const cat1 = new Gato("Mimi");
const dog2 = new Cachorro("Thor");

console.log(dog1.fazerSom());
console.log(cat1.fazerSom()); 
console.log(dog2.fazerSom()); 
