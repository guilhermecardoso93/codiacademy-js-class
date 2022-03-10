potions = [
  'Blue',
  'Red',
  'Green',
  'Yellow'
]
console.log(potions)

for(let i =0; i < potions.length;i++){
  if(potions[i]==='Blue'){
    console.log('Poção Encontrada')
  } else{
    console.log('Poção Não Encontrada')
  }
}