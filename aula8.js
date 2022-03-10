//Metodos
let player = {
  saude: 100,
  felicidade: 50,
  moedas: 0,
  roupa: 'não',
  play: function () {
    this.felicidade += 30
  },
  eat: function (comida) {
    if (comida == 'laranja') {
      this.saude += 10
    }
    if (comida == 'uva') {
      this.saude += 20
    }
  }, 
  buy: function(){
    if( this.moedas >= 20){
      this.moedas -= 20;
      this.roupa = 'Sim!';
    } else if( this.moedas < 20){
      console.log('Sem Dinheiro')
    }
  }
}

//Antes da Execução
console.log(player)
player.buy()
player.buy()
player.buy()
player.buy()
player.buy()
player.buy()
player.buy()
player.buy()
player.buy()
console.log(player)
