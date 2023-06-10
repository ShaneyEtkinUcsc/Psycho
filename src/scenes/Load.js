
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

        //title scene assets
        this.load.image("title", "./assets/art/MenuScene/PSYCHO.PNG");
        this.load.atlas("buttons", "./assets/art/MenuScene/buttons.png", "./assets/art/MenuScene/buttons.json");
        this.load.bitmapFont("SanJoseB", "./assets/fonts/NHLSanJose.png", "./assets/fonts/NHLSanJose.xml");

        //menu music
        this.load.audio("menuMusic", "./assets/sound/Psycho_8bit.wav");

        //intro cutscene assets
        this.load.image("top", "./assets/art/IntroCutscene/texttop.png");
        this.load.image("bottom", "./assets/art/IntroCutscene/textbottom.png");
        this.load.image("triangle", "./assets/art/IntroCutscene/twyangle.png")

        //intro cutscene voice audio
        this.load.audio("knock", "./assets/sound/IntroCutscene/walkingUp.m4a");
        this.load.audio("pause", "./assets/sound/IntroCutscene/pause.m4a");
        this.load.audio("driveAway", "./assets/sound/IntroCutscene/driveAway.m4a");
        this.load.audio("audio1", "./assets/sound/IntroCutscene/audio1.m4a");
        this.load.audio("audio2", "./assets/sound/IntroCutscene/audio2.m4a");
        this.load.audio("audio3", "./assets/sound/IntroCutscene/audio3.m4a");
        this.load.audio("audio4", "./assets/sound/IntroCutscene/audio4.m4a");
        this.load.audio("audio5", "./assets/sound/IntroCutscene/audio5.m4a");
        this.load.audio("audio6", "./assets/sound/IntroCutscene/audio6.m4a");
        this.load.audio("audio7", "./assets/sound/IntroCutscene/audio7.m4a");
        this.load.audio("audio8", "./assets/sound/IntroCutscene/audio8.m4a");
        this.load.audio("audio9", "./assets/sound/IntroCutscene/audio9.m4a");
        this.load.audio("audio10", "./assets/sound/IntroCutscene/audio10.m4a");
        this.load.audio("audio11", "./assets/sound/IntroCutscene/audio11.m4a");
        this.load.audio("audio12", "./assets/sound/IntroCutscene/audio12.m4a");
        this.load.audio("audio13", "./assets/sound/IntroCutscene/audio13.m4a");
        this.load.audio("audio14", "./assets/sound/IntroCutscene/audio14.m4a");
        this.load.audio("audio15", "./assets/sound/IntroCutscene/audio15.m4a");
        this.load.audio("audio16", "./assets/sound/IntroCutscene/audio16.m4a");
        this.load.audio("audio17", "./assets/sound/IntroCutscene/audio17.m4a");
        this.load.audio("audio18", "./assets/sound/IntroCutscene/audio18.m4a");
        this.load.audio("audio19", "./assets/sound/IntroCutscene/audio19.m4a");
        this.load.audio("audio20", "./assets/sound/IntroCutscene/audio20.m4a");
        this.load.audio("audio21", "./assets/sound/IntroCutscene/audio21.m4a");
        
        //drive scene assets
        this.load.image("carFront", "./assets/art/DriveScene/carfront.png");
        this.load.image("roadline", "./assets/art/DriveScene/whitelineF.png");
        this.load.image("roadlineR", "./assets/temps/roadlineTempR.png");
        this.load.image("yellowline", "./assets/temps/yellowTempL.png");
        this.load.image("yellowlineR", "./assets/art/DriveScene/yellowlineF.png");
        this.load.image("rearview", "./assets/art/DriveScene/rearview_frame.png");
        this.load.image("cop", "./assets/art/DriveScene/car_glare.png");
        this.load.image("skyline", "./assets/art/DriveScene/skyline.png");
        this.load.image("frontview", "./assets/art/DriveScene/background2.png");
        this.load.image("rainOverlay", "./assets/art/DriveScene/rainoverlay.png");
        this.load.image("road", "./assets/art/DriveScene/ROADS.png")
        this.load.image("lines","./assets/art/DriveScene/whitelines.png");

        //drive scene 2 assets
        this.load.image("face","./assets/art/DriveScene/face.png");
        this.load.image("interior", "./assets/art/DriveScene/car_int.png");
        this.load.image("exclamation", "./assets/art/DriveScene/exclamationpoint.png");
        this.load.image("wheel", "./assets/art/DriveScene/wheel.png");
        this.load.image("txtbottom", "./assets/art/DriveScene/textboxbottom.png");

        //drive scene siren audio
        this.load.audio("siren", "./assets/sound/DriveScene/sirenSfx.mp3");
        //drive scene voice audio
        this.load.audio("audio22", "./assets/sound/DriveScene/audio22.m4a");
        this.load.audio("audio23", "./assets/sound/DriveScene/audio23.m4a");
        this.load.audio("audio24", "./assets/sound/DriveScene/audio24.m4a");
        this.load.audio("audio25", "./assets/sound/DriveScene/audio25.m4a");
        this.load.audio("audio26", "./assets/sound/DriveScene/audio26.m4a");
        this.load.audio("audio27", "./assets/sound/DriveScene/audio27.m4a");
        this.load.audio("audio28", "./assets/sound/DriveScene/audio28.m4a");
        this.load.audio("audio29", "./assets/sound/DriveScene/audio29.m4a");
        this.load.audio("audio30", "./assets/sound/DriveScene/audio30.m4a");
        this.load.audio("audio31", "./assets/sound/DriveScene/audio31.m4a");
        this.load.audio("audio32", "./assets/sound/DriveScene/audio32.m4a");
        this.load.audio("audio33", "./assets/sound/DriveScene/audio33.m4a");
        this.load.audio("audio34", "./assets/sound/DriveScene/audio34.m4a");
        this.load.audio("audio35", "./assets/sound/DriveScene/audio35.m4a");
        this.load.audio("audio36", "./assets/sound/DriveScene/audio36.m4a");
        this.load.audio("audio37", "./assets/sound/DriveScene/audio37.m4a");
        this.load.audio("audio38", "./assets/sound/DriveScene/audio38.m4a");
        this.load.audio("audio39", "./assets/sound/DriveScene/audio39.m4a");
        this.load.audio("audio40", "./assets/sound/DriveScene/audio40.m4a");
        this.load.audio("audio41", "./assets/sound/DriveScene/audio41.m4a");
        this.load.audio("audio42", "./assets/sound/DriveScene/audio42.m4a");
        this.load.audio("audio43", "./assets/sound/DriveScene/audio43.m4a");
        this.load.audio("audio44", "./assets/sound/DriveScene/audio44.m4a");
        this.load.audio("audio45", "./assets/sound/DriveScene/audio45.m4a");
        this.load.audio("audio46", "./assets/sound/DriveScene/audio46.m4a");

        //motel scene assets
        this.load.atlas("Marion", "./assets/art/MotelScene/Marion.png", "./assets/art/MotelScene/Marion.json");
        this.load.atlas("Bates", "./assets/art/MotelScene/Bates.png", "./assets/art/MotelScene/Bates.json");
        this.load.image("closetRack", "./assets/art/MotelScene/ClosetRack.png");
        this.load.image("desk1", "./assets/art/MotelScene/Desk1.png");
        this.load.image("desk2C", "./assets/art/MotelScene/Desk2_1.png");
        this.load.image("desk2O", "./assets/art/MotelScene/Desk2_2.png");
        this.load.image("painting2", "./assets/art/MotelScene/Desk2_Painting.png");
        this.load.image("desk3", "./assets/art/MotelScene/Desk3.png");
        this.load.image("desk4", "./assets/art/MotelScene/Desk4.png");
        this.load.image("bed", "./assets/art/MotelScene/Scene2_Bed.png");
        this.load.image("floorPlan", "./assets/art/MotelScene/Scene2_BG.PNG");
        this.load.image("chair", "./assets/art/MotelScene/Scene2_Chair.png");
        this.load.image("smallPaint1", "./assets/art/MotelScene/SmallPainting_1.png");
        this.load.image("smallPaint2", "./assets/art/MotelScene/SmallPainting_2.png");
        this.load.image("smallPaint3", "./assets/art/MotelScene/SmallPainting_3.png");

        //temp Motel Road Map for Placement
        this.load.image("roadMap", "./assets/art/MotelScene/MotelMap.png")

        //motel scene audio        
       
    }


    create() {

    //drive scene quick start
    //this.scene.start("driveScene");

    //motel scene quick start
    this.scene.start("motelScene");


     // check for local storage browser support
     if(window.localStorage) {
        console.log("Local storage supported");
    } else {
        console.log("Local storage not supported")
    }

    this.sound.add("menuMusic");

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