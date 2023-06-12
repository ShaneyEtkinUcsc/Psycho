console.log("in main");

let config = {
    type: Phaser.CANVAS,
    render: {
    pixelArt: true,
    },
    //mode: Phaser.Scale.FIT,
    scale: {
        // screen scaling
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
            //turn on debugging
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Menu, Credits, Help, Intro, Drive, Drive2, Cutscene2, Motel ]
}

const game = new Phaser.Game(config)

//global definitions

//general config shortcuts
let width = game.config.width;
let height = game.config.height;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let keySPACE, keyW, keyA, keyS, keyD, keyUP, keyLEFT, keyRIGHT, keyDOWN;

//global Atari 2600 audio config
var audioConfig = {
    mute: false,
    volume: 0.08,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0,
    fade: true,
};

//cutscene audio fix
let musicPlaying = false;

//drive definitions
//car position to pass across scenes
let positionX = 0;
let paraPos = 0;
//camera switch to pass across scenes
let lookable = false;
let shakeL = -222;
let shakeR = 222;
let visitedtwice = 0;
let visited2twice = 0;
//gameOver condition to pass across scenes
let offRoadL = -392;
let offRoadR = 392;
let offRoad = false;
//conversation switching point
let talkPosition = 0;
let scootch_countR = 0;
let scootch_countL = 0;

//motel definitions
//defining player states
let movingRight = false;
let movingLeft = false;
let hasKey = false;
//defining inspection states
let creatable = true;
let desk = false;
let chair1 = false;
let chair2 = false;
let chair3 = false;
let paintingS = false;
let paintingL = false;
let bathroomDoor = false;
let motelDoor = false;
let lockedDresser = false;
let plainDresser = false;
let keyDresser = false;
let closet = false;
let bed = false;


//split scream defitions
let dead = false;



