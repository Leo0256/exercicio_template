class Projeto{
    constructor(nome, tecnologia, github){
        this.nome = nome;
        this.tecnologia = tecnologia;
        this.github = github;
    }
}

class Pets {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
}

module.exports = {
    Projeto: Projeto,
    Pets: Pets
}  





