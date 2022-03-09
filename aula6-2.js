let itens = ['sword', 'shield', 'knife']
let swordPrice = 100
let shieldPrice = 200
let knifePrice = 300

let player

function buyItem(player, itens) {
  if (player > 100 && player < 199) {
    console.log(`Você comprou a ${itens.indexOf[0]}`)
  } else if (player > 200 && player < 299) {
    console.log(`Você comprou a ${itens.indexOf[1]}`)
  } else if (player >= 300) {
    console.log(`Você comprou a ${itens.indexOf[2]}`)
  } else if (player < 100) {
    console.log('Sem Money')
  }
}

buyItem(200)

let moeda = 0
let qtdSword = 0
let qtdShield = 0
let qtdKnife = 0

function buy(moeda, item) {
  if (item === 'sword' && moeda > 100) {
    moeda -= 100
    qtdSword += 1
    console.log('Sword is yours!')
  } else if (item === 'sword' && moeda < 100) {
    console.log(`Seu saldo é de ${moeda} é insuficiente para comprar a Sword!`)
  }

  if (item == 'shield' && moeda > 200) {
    moeda -= 200
    qtdShield += 1
    console.log('Shield is yours!')
  } else if (item === 'shield' && moeda < 200) {
    console.log(`Seu saldo é de ${moeda} é insuficiente para comprar a Shield!`)
  }

  if (item == 'knife' && moeda > 300) {
    moeda -= 300
    qtdKnife += 1
    console.log('Knife is yours!')
  } else if (item === 'knife' && moeda < 300) {
    console.log(`Seu saldo é de ${moeda} é insuficiente para comprar a Knife!`)
  }
}
