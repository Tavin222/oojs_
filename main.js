function Animal(raca){
    this.raca = raca;
}

function Treinador(nome, dono) {
    this.nome = nome;
    this.dono = dono;

}

function Atributo(tipo, fraqueza, vantagem){
    this.tipo = tipo;
    this.fraqueza = fraqueza
    this.vantagem = vantagem
}

function Pokemon(raca, nome, dono, tipo, fraqueza, vantagem){

    Animal.call(this, raca);
    Treinador.call(this, nome, dono);
    Atributo.call(this, tipo, fraqueza, vantagem);


    //função para ver se está funcionando corretamente ;)//
    this.diz = function() {
        console.log(this.vantagem) //mudar atributo para teste//
    }
}

const pokemon1 = new Pokemon('Pokemon', 'Pikachu', 'Ash', 'eletrico', 'rochoso', 'água' )

pokemon1.diz()