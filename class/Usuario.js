class Usuario {
    #ativo
    constructor(nome, idade, email, ativo) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.#ativo = ativo
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(ativo) {
        return this.#ativo = ativo
    }

    get boasVindas() {
        return `Bem vindo ${this.nome}`
    }

    mostrarDados() {
        console.log(this.nome, this.idade, this.email, this.#ativo)
    }

    static totalUsuario = 0

    static contarUsuario() {
        return this.contarUsuario

    }

}

module.exports = Usuario