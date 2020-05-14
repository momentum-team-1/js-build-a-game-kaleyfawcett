class Game {
  constructor () {
    const canvas = document.getElementById('gameboard')
    let context = canvas.getContext('2d')
    let gameSize = { x: gameboard.width, y: gameboard.height }
    this.player = new Player(this, gameSize)
    this.bodies = []

    // Here you can add the Player and then enemies
    this.bodies = this.bodies.concat(this.player)

    const animate = () => {
      this.update()
      this.drawBodies(context, gameSize)


      requestAnimationFrame(animate)
    }

    animate()
  }

  drawBodies (context, gameSize) {
    context.clearRect(0, 0, gameSize.x, gameSize.y)
    for (let body of this.bodies){
      context.fillStyle = '#000000'
      const xPosition = body.center.x - body.size.x / 2
      const yPosition = body.center.y - body.size.y / 2
      const width = body.size.x
      const height = body.size.y
      context.fillRect(xPosition, yPosition, width, height)
    }
  }

  update () {
    // loop over bodies array to call the update method on each of them
    for (let body of this.bodies) {
      body.update()
    }
  }
}

class Player {
  constructor (game, gameSize) {
    this.size = { x: 30, y: 30 }
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
    this.keyboarder = Keyboarder
    this.game = game
  }

  update () {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2
    }
    if (this.keyboarder.isDown(this.keyboarder.KEYS.S)) {
      console.log('pew pew')
      const bullet = new Bullet(
        { x: this.center.x, y: this.center.y - this.size.y - 10 },
        { x: 0, y: -7 }
      )
      // add the bullet to the bodies array so you can call draw on it in the Game object
      this.game.bodies.push(bullet)
      console.log(this.game.bodies)
    }
  }
}

class Bullet {
  constructor (center, velocity) {
    this.center = center
    this.size = { x: 3, y: 5 }
    this.velocity = velocity
  }

  update () {
    this.center.x += this.velocity.x
    this.center.y += this.velocity.y
  }
}

// class Enemies {
//     constructor (game, center) {
//         this.game = this.game
//         this.center = center
//         this.size = {x: 15, y: 15}

//         this.patrolX = 0
//         this.speedX = 0.3

//     }
// }

new Game()

/// //////////////////////////////////////////////////////////////////////////////////////////

// create bodies for player, enemy to shoot, enemy to avoid, bullets, and bonus

// make the player appear and also move back and forth (DONE) & not go off the screen

// make the player shoot the bullets up

// make the enemies and bonus move down

// make the enemies disappear after you hit them

// make enemies and bonus not run into each other

// keep score

// how to know when game is over

// start over

// opening screen with directions

/// //////////////////////////////////////////////////////////////////////////////////////////

// else if (this.center.x < 0) this.center.x = 0;
