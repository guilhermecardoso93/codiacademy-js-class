//Lógica Booleana
// ! NÂO negação obter o inverso de um booleano

let magico = !false

if (magico) {
  console.log('Mágico')
} else{
  console.log('Não Mágico')
}


// && duas opções 

let pontos = 900
let hora= 1

if(pontos == 1000 && hora >= 2){
  console.log('Toma Bonus')
} else{
  console.log('Sem Bonus')
}

// || OU uma opção ou outra

if(pontos == 1000 || hora >= 2){
  console.log('Toma Bonus')
} else{
  console.log('Sem Bonus')
}

// 