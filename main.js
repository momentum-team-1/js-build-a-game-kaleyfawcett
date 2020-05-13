
class Game {
    constructor () {
    let canvas = document.getElementById ("gameboard");
    let context = canvas.getContext("2d");
    let gameSize = { x: gameboard.width, y: gameboard.height};
    this.player = new Player (gameSize);
    this.bullet = new Bullet (gameSize);
    
    let animate = () => {
        this.update()
        this.drawPlayer(context, gameSize)
        this.drawBullet (context,gameSize)
        requestAnimationFrame(animate) 
    }
    animate () 

}

drawPlayer (context, gameSize) {
    context.clearRect (0, 0, gameSize.x, gameSize.y)
    context.fillStyle = "#000000"
    let startingXPosition = this.player.center.x - this.player.size.x / 2
    let startingYPosition = this.player.center.y - this.player.size.y / 2
    let playerWidth = this.player.size.x
    let playerHeight = this.player.size.y
    context.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
}

drawBullet (context, gameSize) {
    // context.clearRect (0, 0, gameSize.x, gameSize.y)
    context.fillStyle = "#000000"
    let startingXPosition = this.player.center.x - this.player.size.x / 2
    let startingYPosition = this.player.center.y - 20
    let bulletWidth = this.bullet.size.x
    let bulletHeight = this.bullet.size.y
    context.fillRect(startingXPosition, startingYPosition, bulletWidth, bulletHeight)

}
update () {
    this.player.update ()
    
}
}

class Player {
    constructor (gameSize) {
    this.size = {x: 30, y: 30}
    this.center = {x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
    this.keyboarder = Keyboarder 
}

update () {
    if (this.keyboarder.isDown (this.keyboarder.KEYS.LEFT)) {
        this.center.x -= 2
    } else if (this.keyboarder.isDown (this.keyboarder.KEYS.RIGHT)) {
        this.center.x += 2
    }
    if (this.keyboarder.isDown(this.keyboarder.KEYS.S)) {
        console.log ("pew pew")
        let bullet = new Bullet ({ x: this.center.x, y: this.center.y - this.size.y - 10},
            {x: 0, y: -7})    
        }
} 
}

class Bullet {
    constructor (center, velocity) {
        this.center = center
        this.size = {x: 3, y:3}
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




new Game ()





/////////////////////////////////////////////////////////////////////////////////////////////

//create bodies for player, enemy to shoot, enemy to avoid, bullets, and bonus

//make the player appear and also move back and forth (DONE) & not go off the screen

//make the player shoot the bullets up 

//make the enemies and bonus move down 


//make the enemies disappear after you hit them

//make enemies and bonus not run into each other 

//keep score 

//how to know when game is over

//start over

//opening screen with directions 

/////////////////////////////////////////////////////////////////////////////////////////////


// else if (this.center.x < 0) this.center.x = 0;

