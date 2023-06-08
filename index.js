const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let win = document.querySelector('#win')


const gravity = 1.5

class Player {
    constructor() {
      this.position = {
        x:100,
        y:100
      }
     this.velocity = {
      x: 0,
      y: 0 
     }

     this.width = 30
     this.height = 30
    }

    draw(){
      c.fillStyle = 'red'
      c.fillRect(this.position.x, this.position.y, this.width , this.height)
    }

    update() {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    
      if(this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
    //else this.velocity.y = 0 
    }
  }
  
class Platform{
    constructor({x,y}) {
      this.position = {
        x,
        y
      }

      this.width = 200
      this.height = 20
    }

    draw() {
      c.fillStyle = 'blue'
      c.fillRect(this.position.x , this.position.y , this.width , this.height)
    }
  }
  function goBack(){
    player = new Player() 
    platforms = [new Platform({
       x:200 ,
       y:100
    }) ,
    new Platform({x:-3 , y: 470}),
    new Platform({x:2+ 100 , y: 770}),
    new Platform({x:700 , y: 700}),
    new Platform({x:500 , y: 300}),
    new Platform({x:900 , y: 200}),
    new Platform({x:1200 , y: 700}),
    new Platform({x:1400 , y: 100}),
    new Platform({x:1800 , y: 470}),
    new Platform({x:2000 , y: 440}),
    new Platform({x:2500 , y: 500}),
    new Platform({x:2800 , y: 300}),
    new Platform({x:3000 , y: 770}),
    new Platform({x:3300 , y: 500}),
    new Platform({x:3500 , y: 300}),
    new Platform({x:3900 , y: 200}),
    new Platform({x:4200 , y: 700}),
    new Platform({x:4400 , y: 100}),
    new Platform({x:4800 , y: 370}),
    new Platform({x:5000 , y: 540}),
    new Platform({x:5500 , y: 600}),
    new Platform({x:5800 , y: 400}),
    new Platform({x:3300 , y: 700}),
    new Platform({x:3500 , y: 300}),
    new Platform({x:3900 , y: 200}),
    new Platform({x:4200 , y: 500}),
    new Platform({x:4400 , y: 100}),
    new Platform({x:4800 , y: 370}),
    new Platform({x:5000 , y: 540}),
    new Platform({x:5500 , y: 600}),
    new Platform({x:5800 , y: 400}),
    new Platform({x:6000 , y: 500}),
    new Platform({x:6200 , y: 300}),
    new Platform({x:6400 , y: 200}),
    new Platform({x:6600 , y: 700}),
    new Platform({x:7000 , y: 100}),
    new Platform({x:7300 , y: 370}),
    new Platform({x:7400 , y: 740}),
    new Platform({x:7500 , y: 600}),
    new Platform({x:7800 , y: 400}),
    new Platform({x:8000 , y: 500}),
    new Platform({x:8500 , y: 300}),
    new Platform({x:8900 , y: 200}),
    new Platform({x:9200 , y: 500}),
    new Platform({x:9400 , y: 100}),
    new Platform({x:9800 , y: 470}),
    new Platform({x:10000 , y: 540}),
    new Platform({x:10500 , y: 600}),
    new Platform({x:800 , y: 700})
    ]
    
    scrollOfset = 0
    
    }
  
let player = new Player() //const platform = new Platform()
let platforms = [new Platform({
     x:200 ,
     y:100
  }) ,
  new Platform({x:-3 , y: 470}),
  new Platform({x:2+ 100 , y: 770}),
  new Platform({x:700 , y: 550}),
  new Platform({x:500 , y: 300}),
  new Platform({x:900 , y: 200}),
  new Platform({x:1200 , y: 700}),
  new Platform({x:1400 , y: 100}),
  new Platform({x:1800 , y: 470}),
  new Platform({x:2000 , y: 440}),
  new Platform({x:2500 , y: 500}),
  new Platform({x:2800 , y: 300}),
  new Platform({x:3000 , y: 770}),
  new Platform({x:3300 , y: 500}),
  new Platform({x:3500 , y: 300}),
  new Platform({x:3900 , y: 200}),
  new Platform({x:4200 , y: 700}),
  new Platform({x:4400 , y: 100}),
  new Platform({x:4800 , y: 370}),
  new Platform({x:5000 , y: 540}),
  new Platform({x:5500 , y: 600}),
  new Platform({x:5800 , y: 400}),
  new Platform({x:3300 , y: 700}),
  new Platform({x:3500 , y: 300}),
  new Platform({x:3900 , y: 200}),
  new Platform({x:4200 , y: 500}),
  new Platform({x:4400 , y: 100}),
  new Platform({x:4800 , y: 370}),
  new Platform({x:5000 , y: 540}),
  new Platform({x:5500 , y: 600}),
  new Platform({x:5800 , y: 400}),
  new Platform({x:6000 , y: 500}),
  new Platform({x:6200 , y: 300}),
  new Platform({x:6400 , y: 200}),
  new Platform({x:6600 , y: 700}),
  new Platform({x:7000 , y: 100}),
  new Platform({x:7300 , y: 370}),
  new Platform({x:7400 , y: 740}),
  new Platform({x:7500 , y: 600}),
  new Platform({x:7800 , y: 400}),
  new Platform({x:8000 , y: 500}),
  new Platform({x:8500 , y: 300}),
  new Platform({x:8900 , y: 200}),
  new Platform({x:9200 , y: 500}),
  new Platform({x:9400 , y: 100}),
  new Platform({x:9800 , y: 470}),
  new Platform({x:10000 , y: 540}),
  new Platform({x:10500 , y: 600}),
  new Platform({x:800 , y: 700})
  ] 
const keys = {
right: {
      pressed:false
    },
left: {
      pressed: false
    }
  }
let scrollOfset = 0
function animate() {
   requestAnimationFrame(animate)
   c.fillStyle = 'white'
   c.fillRect(0,0, canvas.width, canvas.height)
  //player.update()
   platforms.forEach((platform)=> {
    platform.draw()
   })
   player.update()

   if (keys.right.pressed && player.position.x < 400){
    player.velocity.x = 5
   }else if (keys.left.pressed && player.position.x > 100){
    player.velocity.x = -5
   } else {
    player.velocity.x = 0

    if (keys.right.pressed){
    scrollOfset += 5
    platforms.forEach((platform) => {
      platform.position.x -= 5
    })
    } else if (keys.left.pressed){
      scrollOfset -= 5
      platforms.forEach((platform) => {
     platform.position.x += 5
      })
    }
  }

  console.log(scrollOfset)

// platform collision detection
platforms.forEach((platform) => {
   if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
    player.velocity.y = 0
   }
  })

  let win = document.querySelector('#win')

// win condition
if (scrollOfset > 4000){
  console.log('YOU WIN !!!');
  btn.innerHTML = 'you win !!!';}
else if (player.position.y > canvas.height){
  btn.innerHTML = ("O no you lose :(");
}
}

// // lose condition
// if (player.position.y > canvas.height){
//   goBack()
//  }
// // console.log('you lose')
animate()

window.addEventListener('keydown' , ({ keyCode }) => {
 //console.log(keyCode)
  switch(keyCode){
    case 65:
     console.log('left')
     keys.left.pressed = true
    break

    case 83:
     console.log('down')
    break

    case 68:
     console.log('right')
     keys.right.pressed = true
    break

    case 87:
     console.log('up')
     player.velocity.y -= 5
    break
  }
  console.log(keys.right.pressed)
})

window.addEventListener('keyup' , ({ keyCode }) => {
  //console.log(keyCode)
   switch(keyCode){
     case 65:
      console.log('left')
      //player.velocity.x -= 1
      keys.left.pressed = false
     break
 
     case 83:
      console.log('down')
     // player.velocity.x += 20
     break
 
     case 68:
      console.log('right')
      //player.velocity.x = 0
      keys.right.pressed = false
     break
 
     case 87:
      console.log('up')
      player.velocity.y -= 20
     break
   }

   console.log(keys.right.pressed)
 })
