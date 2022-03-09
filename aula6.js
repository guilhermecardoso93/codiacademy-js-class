//Funções

function htm(horas) {
  let resultado = horas * 60
  return resultado
}

let minutos = htm(10)

console.log(minutos)

function estado(vel) {
  if (vel == 0) {
    console.log('parado')
  } else if (vel > 0 && vel < 100) {
    console.log('andando')
  } else if (vel > 100) {
    console.log('correndo')
  }
}

estado(90)
estado(102)
estado(0)


function recebeBonus(tempo, vida){
  if(tempo >1000 && vida < 2){
    console.log('Recebe Bonus')
  } else if (tempo < 1000 && vida > 2){
    console.log('Sem bonus')
  }
}

recebeBonus(1050, 1)
recebeBonus(900, 5)