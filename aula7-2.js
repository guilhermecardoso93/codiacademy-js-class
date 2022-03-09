let player ={
  name:'Dragon',
  life:5,
  kindOf:'Dragon',
  points:600,
  isMagic:true,
  haveAWeapon:true,
  magicPoints:500,
  map:{
    bornCity:'North',
    visitsCities:['Porto Real', 'Ninho da Águia', 'Vallhalla'],
    findObjects:['Capa Mágica', 'Anel do Poder']
  }
}

console.log(player)

player.haveCalice = true

console.log(player)

delete player.haveCalice

console.log(player)
