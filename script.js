campoMinado = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 1, 0]
]

console.log(campoMinado)

let jog1 = campoMinado[0][0]
let jog2 = campoMinado[1][0]
let jog3 = campoMinado[2][2]

jogadas = []
jogadas.push(jog1)
jogadas.push(jog2)
jogadas.push(jog3)
console.log(jogadas)

for (let i = 0; i < jogadas.length; i++) {
  if (jogadas[i] == 1) {
    console.log('Perdeu')
  } else if (i == jogadas.length - 1) {
    console.log('Venceu!')
  }
}
