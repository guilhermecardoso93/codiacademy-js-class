//break
let itens = 0
let colidindoItens = true

while (colidindoItens) {
  itens += 1
  if (itens > 10) {
    break
  }
  console.log(itens)
}

//continue
let castigo = true
let colidiu = true
let moedas = 0

console.log(moedas)

while (colidiu) {
  if (castigo == true) {
    continue
  }
  moedas++

  if(moedas == 10){
    break
  }
}


let main = 0

while(true){
  main ++;
  if(main === 999){
    break
  }
}

console.log(main)