
console.log("in load");

class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    // preloading all game assets
    preload() {
        
        //loading bar
        //I'm thinking we have a preload scene for a cooler loading bar at some point
        let loadingBar = this.add.graphics();
        this.load.on("progress", (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0xac2f1e, 1);
            loadingBar.fillRect(0, centerY, width * value, 30);
        });
        this.load.on("complete", () => {
            loadingBar.destroy();
        });
        this.load.image("carFront", "./assets/art/carfront.png");
        this.load.image("roadline", "./assets/temps/roadlineTempL.png");
        this.load.image("roadlineR", "./assets/temps/roadlineTempR.png");
        this.load.image("yellowline", "./assets/temps/yellowTempL.png");
        this.load.image("yellowlineR", "./assets/temps/yellowTempR.png");
        this.load.image("rearview", "./assets/art/rearview_frame.png");
        this.load.image("cop", "./assets/art/car_glare.png");
        this.load.image("top", "./assets/art/texttop.png");
        this.load.image("bottom", "./assets/art/textbottom.png");
        this.load.image("skyline", "./assets/art/skyline.png");
        this.load.image("frontview", "./assets/art/background2.png");
        this.load.image("rainOverlay", "./assets/art/rainoverlay.png");
        this.load.image("road", "./assets/art/ROADS.png")
        this.load.image("lines","./assets/art/whitelines.png");

        this.load.audio("menuMusic", "./assets/sound/Psycho_8bit.wav");

        this.load.bitmapFont("SanJoseB", "./assets/fonts/NHLSanJose.png", "./assets/fonts/NHLSanJose.xml");
       
    }


    create() {
     // check for local storage browser support
     if(window.localStorage) {
        console.log("Local storage supported");
    } else {
        console.log("Local storage not supported");
    }

    //drive scene quick jump
    //this.scene.start("driveScene");

    this.loadingfont = this.add.text(centerX, centerY, "Click Here to Begin", { fill: '#dea918', fontSize: '50px', fontFamily: 'Gothic' }).setAlpha(0).setOrigin(0.5).setInteractive()

    this.startButton = this.add.text(centerX, centerY, "Click Here to Begin", { fill: '#dea918', fontSize: '50px', fontFamily: 'SanJose' }).setOrigin(0.5).setInteractive()
    .on('pointerdown', () => this.returnToMenu() )
    .on('pointerover', () => this.hoverState() )
    .on('pointerout', () => this.restState() );
    this.startButton.setAlpha(0.0000001);
    this.startButtontemp = this.add.bitmapText(centerX, centerY + 2, "SanJoseB", "Click here to Begin").setOrigin(0.5);
}

returnToMenu() {
    this.scene.start("menuScene");
}

hoverState() {
    this.startButtontemp.setAlpha(0);
    this.startButton.setAlpha(1).setStyle({ fill: '#dea918'});
}

restState() {
    this.startButton.setStyle({ fill: '#eb4034'})
}
   
}

console.log("reached the bottom of load");