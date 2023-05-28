console.log("in main");

let config = {
    type: Phaser.CANVAS,
    pixelArt: true,
    mode: Phaser.Scale.FIT,
    scale: {
        // screen scalling
        width: 1280,
        height: 720,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        // I learned this from phaser examples and stack overflow
        // https://stackoverflow.com/questions/53873534/phaser-3-scaling-the-game-to-full-websites-width-and-height
        
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Drive ]
}

let game = new Phaser.Game(config)

//global definitions

let width = game.config.width;
let height = game.config.height;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let highScore = 0;
let scootch_countL = 0;
let scootch_countR = 0;
let dead = false;
let keySPACE, keyA, keyD, keyLEFT, keyRIGHT;
