class Drive extends Phaser.Scene {
    constructor() {
        super("driveScene");
    }

    create() {
        //keeping track of player's scene visits
        visitedtwice += 1;

        console.log("in driving");
        console.log(positionX);

        //this.scene.run("drive2Scene");

        //defining game state
        offRoad = false;

        //adding scene music config

        this.gameMusic = this.sound.add("menuMusic");
        
        var musicConfig = {
            mute: false,
            volume: 0.1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
         }

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE.enabled = true;

        //setting world bounds
        this.physics.world.bounds.setTo(0, 0, game.config.width, game.config.height);
        this.physics.world.setBoundsCollision(true, true, false, false); // check left and right, not up or down

        //temp backgrounds
        //this.back1 = this.add.rectangle(0, 0, 1280, 720, 0xFFFFFF).setOrigin(0);
        //this.back2 = this.add.rectangle(0, 0, 1280, 360, 0xDC3C28).setOrigin(0);

        //creating back mirror background
        this.mirrorBack = this.add.tileSprite(0 + paraPos, 0, 1280, 360, "skyline").setOrigin(0);
        this.frontSky = this.add.sprite(0, 0, "frontview").setOrigin(0);
        this.frontSky.setScale(0.5);
      
        //creating road
        this.roadbase = this.add.rectangle(0, centerY, 1280, 800, 0x2B2B2B).setOrigin(0);
        this.road = this.add.tileSprite(0, centerY, 1280, 360, "road").setOrigin(0);
        this.roadBack = this.add.tileSprite(220, centerY, 840, 90, "road").setOrigin(0);

        //creating player car and setting depth on top
        this.car = this.physics.add.sprite(centerX + positionX, 650, "carFront");
        this.car.setScale(1.2);
        this.car.setDepth(9);

        //setting up physics for car
        this.car.setSize(360, 30, true);
        this.car.setCollideWorldBounds(true);
        this.car.setImmovable(true);
        this.car.setDebugBodyColor(0xFACADE);

        //setting up reactive sides for car
        this.carsideL = this.physics.add.sprite(380 + positionX, 650);
        this.carsideL.setSize(250, 30, true);
        this.carsideL.setImmovable(true);
        this.carsideL.setDebugBodyColor(0xFACADE);
        
        this.carsideR = this.physics.add.sprite(900 + positionX, 650);
        this.carsideR.setSize(250, 30, true);
        this.carsideR.setImmovable(true);
        this.carsideR.setDebugBodyColor(0xFACADE);

        //this.car.body.setDragX(375);

        //making the player car bounce
        let carBounce = this.tweens.chain({
            targets: this.car,
            ease: "Bounce.easeOut",
            duration: 100,
            repeat: -1,
            loop: -1,
            tweens: [{
                    y: 650,
                    duration: 100,
            },
            {       y: 651,
                    duration: 100,
            }]
            
        })

        //creating wind sheild
        this.rainOverlay = this.add.sprite(0, 0, "rainOverlay").setOrigin(0);
        this.rainOverlay.setScale(0.5);
        this.rainOverlay.setDepth(10);

        //creating cop car
        this.roadCenter = this.physics.add.sprite(centerX, 340, "cop");
        this.roadCenter.setScale(2.5);
        this.roadCenter.setSize(45, 30, true);
        this.roadCenter.setCollideWorldBounds(true);

        //making the cop bounce
        let copBounce = this.tweens.chain({
            targets: this.roadCenter,
            ease: "Bounce.easeOut",
            duration: 100,
            repeat: -1,
            loop: -1,
            tweens: [{
                    y: 340,
                    duration: 100,
            },
            {       y: 339.5,
                    duration: 100,
            }]
            
        });

        //can't remember why I made this
        //const zone = this.add.zone(centerX, centerY, 200, 30);
        

        //creating tweening road groups

        //bottom right roadline group

        //creating road right back group
        let roadRightB = this.add.group({
            key: "roadlineR",
            loop: -1,
            setXY: {
                x: 1080,
                y: centerY + 18,
            },
        });

        //creating animation for rrb group
        roadRightB.children.iterate(child => {
            this.tweens.chain({
                targets: child,
                ease: "Quint.easeIn",
                duration: 2000,
                repeat: -1,
                repeatDelay: 0,
                loop: -1,
                tweens: [{
                    x: 1280 + scootch_countR,
                    y: 900,
                    duration: 500,
                    scale: { from: 1, to: 5},
            },
            {       x: 1080 + scootch_countR,
                    y: centerY + 18,
                    duration: 1,
                    scale: { from: 5, to: 0.1},
            }]
            
            })
            
        });
    
       //bottom left roadline group

       //creating road left back group
       let roadLeftB = this.add.group({
            key: "yellowline",
            loop: -1,
            setXY: {
                x: 200,
                y: centerY + 18,
            },

        });

        //creating animation for rlb group
        roadLeftB.children.iterate(child => {
            this.tweens.chain({
                targets: child,
                ease: "Quint.easeIn",
                duration: 2000,
                repeat: -1,
                repeatDelay: 0,
                loop: -1,
                tweens: [{
                    x: 0 + scootch_countL,
                    y: 900,
                    duration: 500,
                    scale: { from: 1, to: 5},
            },
            {       x: 200 + scootch_countL,
                    y: centerY + 18,
                    duration: 1,
                    scale: { from: 5, to: 0.1},
            }]
            
            })
            
        });

       //top right roadline group

       //creating road right front group
       let roadRightF = this.add.group({
            key: "yellowlineR",
            loop: -1,
            delay: 100,
            setXY: {
                x: 1000,
                y: centerY + 75,
            },

        });

    //creating animations for rrf group
    roadRightF.children.iterate(child => {
        this.tweens.chain({
            targets: child,
            ease: "Quint.easeIn",
            duration: 2000,
            repeat: -1,
            repeatDelay: 0,
            loop: -1,
            tweens: [{
                delay: 200,
                x: 800 + scootch_countR,
                y: centerY,
                duration: 400,
                scale: { from: 1.75, to: 0.01},
        },
        {       x: 1000 + scootch_countR,
                y: centerY + 75,
                duration: 1,
                scale: { from: 0.001, to: 0.001},
        }]
        
        })
        
    });

     //top left roadline group

     //creating road left front group
     let roadLeftF = this.add.group({
        key: "roadline",
        loop: -1,
        delay: 100,
        setXY: {
            x: 275,
            y: centerY + 75,
        },

    });

    //creating animations for rlf group
    roadLeftF.children.iterate(child => {
        this.tweens.chain({
            targets: child,
            ease: "Quint.easeIn",
            duration: 2000,
            repeat: -1,
            repeatDelay: 0,
            loop: -1,
            tweens: [{
                delay: 200,
                x: 500 + scootch_countL,
                y: centerY,
                duration: 400,
                scale: { from: 1.75, to: 0.1},
        },
        {       x: 275 + scootch_countL,
                y: centerY + 75,
                duration: 1,
                scale: { from: 0.0001, to: 0.0001},
        }]
        
        })
        
    });

        //creating right and left line collisions
        this.roadLeftLine = this.physics.add.sprite(20, 500);
        this.roadLeftLine.setSize(30, 500, true);
        this.roadLeftLine.setImmovable(true);
        this.roadLeftLine.setDebugBodyColor(0xFFFFFF);
        this.physics.add.collider(this.car, this.roadLeftLine, (car, left) => {
            this.goingOff();
            //console.log("left collision")
        });
        this.physics.add.overlap(this.carsideL, this.roadLeftLine, (car, left) => {
            this.goingOff();
            //console.log("left overlap")
        });

        this.roadRightLine = this.physics.add.sprite(1260, 500);
        this.roadRightLine.setSize(30, 500, true);
        this.roadRightLine.setImmovable(true);
        this.roadRightLine.setDebugBodyColor(0xFFFFFF);
        this.physics.add.collider(this.car, this.roadRightLine, (car, right) => {
            this.goingOff();
            //console.log("right collision")
        });
        this.physics.add.overlap(this.carsideR, this.roadRightLine, (car, left) => {
            this.goingOff();
            //console.log("right overlap")
        });

       //creating rear view mirror outline
        this.mirror = this.add.sprite(centerX, 250, "rearview");
        this.mirror.setScale(0.75);
        this.mirror.setDepth(11);

        // configure main camera 
        this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
        this.cameras.main.setZoom(1);

        // startFollow(target [, roundPixels] [, lerpX] [, lerpY] [, offsetX] [, offsetY])
        this.cameras.main.startFollow(this.roadCenter, true, 0.1, 0.1);

        //flipping the camera back after 5 second check
        this.time.delayedCall(5000, () => {
            if(!offRoad){
                console.log("done peeking");
                if(talkPosition <= 5){
                console.log("talkPosition" +  talkPosition);
                talkPosition += 1;
                this.scene.start("drive2Scene");
                }
            }
        });

        let tutorialConfig = {
            fontFamily: 'Gothic',
            fontSize: '25px',
            //backgroundColor: '#ffffff',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //adding tutorial text
        if(visitedtwice <= 1){
            this.tutorial = this.add.text(centerX, centerY + 50, "'A' and 'D' or '←' and '→' to move", tutorialConfig).setOrigin(0.5);
        }

    }

    //allows for line movement (still needs to be updated)

    redraw(directionLeft) {

        if (directionLeft == true){
            //if moving left
            if(scootch_countL <= 25){
                scootch_countL += 1;
                scootch_countR -= 1;

        } else {
            //if moving right
            if(scootch_countR <= 25){
                scootch_countL -= 0.5;
                scootch_countR += 0.5;
            }
         
        }
        }

    }

    offRoad() {

        //adding gameOver sfx config
        var sfxConfig = {
            mute: false,
            volume: 0.1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        //adding gameOver text config
        let gameOverConfig = {
            fontFamily: 'Gothic',
            fontSize: '25px',
            //backgroundColor: '#ffffff',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //getting gameOver sfx for gameOver call
        let sirenSound = this.sound.get("siren");
        if(!sirenSound.isPlaying) {
            sirenSound.play(sfxConfig);
        }
        offRoad = true;
        if(this.tutorial){
            this.tutorial.destroy()
        }
        this.add.text(centerX, centerY, "GAME OVER", gameOverConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 50, "Press S to restart", gameOverConfig).setOrigin(0.5);

    }

    goingOff() {
        console.log("camera shake triggered");
        this.cameras.main.shake(1000, 0.0005, false); 
    }
  
    //resetting globalVariables on a restart
    reset() {
        //resetting position
        positionX = 0;
        paraPos = 0;
        talkPosition = 0;
        //resetting camera switch to pass across scenes
        lookable = false;
        shakeL = -222;
        shakeR = 222;
        visitedtwice = 0;
        //resetting gameOver condition to pass across scenes
        offRoad = false;
        offRoadL = -392;
        offRoadR = 392;
        this.scene.start("drive2Scene");
    }

    update() {

        this.road.tilePositionY -= 5;
        this.roadBack.tilePositionY += 5;

        if(!offRoad){

            this.physics.collide(this.car, this.roadLeftLine, (car, left) =>
            {
                this.offRoad();
            });
            this.physics.collide(this.car, this.roadRightLine, (car, right) =>
            {
                this.offRoad();
            });
            this.physics.overlap(this.carsideL, this.roadLeftLine, (car, left) =>
            {
                this.goingOff();
            });
            this.physics.overlap(this.carsideR, this.roadRightLine, (car, right) =>
            {
                this.goingOff();
            });
            if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
                //console.log("left down");
                //this.car.setAccelerationX(-20);
                if(positionX >= -400){
                this.car.x -= 2;
                this.carsideL.x -= 2;
                this.carsideR.x -= 2;
                if (this.mirrorBack.tilePositionX >= 0) this.mirrorBack.tilePositionX -= 0.25;
            
                    paraPos -= 0.25;
                    positionX -= 2;
                }
                console.log(positionX);
                //this.roadCenter.x -= 5;
                //this.redraw(true);
            } 
            else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
                //console.log("right down");
                if(positionX <= 400){
                this.car.x += 2;
                this.carsideL.x += 2;
                this.carsideR.x += 2;
                if(this.mirrorBack.tilePositionX <= 33) this.mirrorBack.tilePositionX += 0.25;
                    paraPos += 0.25;
                    positionX += 2;
                }
                console.log(positionX);
                //this.roadCenter.x += 5;
                //this.redraw(false);
                //this.car.setAccelerationX(20);
            }
        } else if (offRoad) {
            if(Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyDOWN)){
                console.log("down down");
                this.reset();
            }
        }
    }

    
    

}