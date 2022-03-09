let play = {
  vida: 4,
  pontos: 1000,
  magico: true
}

if (play.pontos >= 1000 && play.vida > 3) {
  console.log('Ganhou chave Azul')
} else if (play.pontos < 1000 || play.vida < 3) {
  console.log('Ganhou chave verde')
} else if (play.pontos >= 1000 && play.magico == false) {
  console.log('Ganhou chave Laranja')
} else {
  console.log('Ganha nada')
}
