// Objetos

//Estruturas de dados

let player = {
  name: 'Gui',
  age: '28',
  hight: '1.79',
  life: '3',
  pontos: '99',
  vivo: true,
  corDaRoupa: {
    cor: 'green',
    tipo: 'macacao',
    tamanho: 'M',
    custo: 200.0,
    nova: true
  }
}

function vivoState(){
  if(player.vivo == true){
    player.vivo = 'Vivo'
  } else{
    player.vivo = 'Morto'
  }
}

vivoState()

console.log(player)
console.log(
  `Ficha Técnica:
  nome:${player.name}
  vidas:${player.life}
  pontos:${player.pontos}
  vivo?:${player.vivo}

  `
)

player.life = 2
console.log(player.life)

player.armadura = 200

console.log(player)
