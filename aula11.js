for (let i = 0; i < 10; i++) {
  console.log('Interação ', i)
}

for (let i = 0; i < 5; i++) {
  console.log(name)
}

let populacao = 100

for (let i = 0; i < 10; i++) {
  populacao = populacao + populacao * 0.05
}

console.log(populacao)

let total = 0

for (let i = 0; i < 100; i++) {
  total = total + i
}

console.log(total)

var f = 89
var c

for (var i = 0; i < 100; i++) {
  c = (5 * (f - 32)) / 9
}

console.log(c)

function fpc(linf, lsup){
  var c
  for(let i = linf; i < lsup; i++){
    c = (5 * ((i - 32)/ 9))
    console.log(c)
  }
}

fpc(0,100)