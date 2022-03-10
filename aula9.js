//While loopem de repetição

let total = 0;

let j = 1;

while (j <= 10) {
  total = total + 1
  console.log(j)
  j++;
}


//

let vidas = 100
let colidindo = true

while(colidindo){
  vidas -=1
  console.log(vidas)
  if(vidas == 0){
    break
  }
}


let total2 = 0
let contador = 0

while(contador < 100){
  total2 = total2 + contador
  contador++
}

console.log(total2)