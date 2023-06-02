
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
        this.load.image("roadline", "./assets/temps/roadlineTemp.png");
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
       
    }


    create() {
     // check for local storage browser support
     if(window.localStorage) {
        console.log("Local storage supported");
    } else {
        console.log("Local storage not supported");
    }

    let beginConfig = {
        fontFamily: 'SanJose',
        fontSize: '40px',
        //backgroundColor: '#ffffff',
        color: '#eb4034',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    this.add.text(centerX, centerY, "Click Here to Begin", beginConfig).setOrigin(0.5);

    // go to Menu scene
    this.input.on('pointerdown', () => {this.scene.start("menuScene");});
    
}

}




console.log("reached the bottom of load");