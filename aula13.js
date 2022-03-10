let notas = [40, 20, 50, 56, 22, 34, 48, 43]
console.log(`Notas antes da Correção eram ${notas}`)

let i = 0
while (i < notas.length) {
  notas[i] += 20
  i++
}

console.log(`Notas depois da Correção ${notas}`)

for (let i = 0; i < notas.length; i++) {
  notas[i] += 20
}
console.log(`Notas depois da Correção ${notas}`)


notas.forEach(function(entry, index, scores){
  notas[index] +=20
})
console.log(`Notas depois da Correção ${notas}`)

