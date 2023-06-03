class Drive extends Phaser.Scene {
    constructor() {
        super("driveScene");
    }

    create() {
        console.log("in driving");

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

        if (menuMusicPlaying){
            this.menuMusic.destroy();
            this.gameMusic.play(musicConfig);
            menuMusicPlaying = true;
        }

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE.enabled = true;

        //setting world bounds
        this.physics.world.bounds.setTo(0, 0, game.config.width, game.config.height);
        this.physics.world.setBoundsCollision(true, true, false, false); // check left and right, not up or down

        //temp backgrounds
        //this.back1 = this.add.rectangle(0, 0, 1280, 720, 0xFFFFFF).setOrigin(0);
        //this.back2 = this.add.rectangle(0, 0, 1280, 360, 0xDC3C28).setOrigin(0);

        //creating back mirror background
        this.mirrorBack = this.add.sprite(0, 0, "skyline").setOrigin(0);
        this.frontSky = this.add.sprite(0, 0, "frontview").setOrigin(0);
        this.frontSky.setScale(0.5);
      
        //creating road
        this.roadbase = this.add.rectangle(0, centerY, 1280, 800, 0x2B2B2B).setOrigin(0);
        this.road = this.add.tileSprite(0, centerY, 1280, 360, "road").setOrigin(0);
        this.roadBack = this.add.tileSprite(220, centerY, 840, 90, "road").setOrigin(0);

        //creating player car and setting depth on top
        this.car = this.physics.add.sprite(centerX, 650, "carFront");
        this.car.setScale(1.2);
        this.car.setDepth(9);

        //setting up physics for car
        this.car.setSize(640, 30, true);
        this.car.setCollideWorldBounds(true);
        this.car.setImmovable(true);
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
            
        })

        //can't remember why I made this
        //const zone = this.add.zone(centerX, centerY, 200, 30);
        

        //creating tweening road groups


        //bottom right roadline group

        //creating road right back group
        let roadRightB = this.add.group({
            key: "yellowlineR",
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
                    x: 1280,
                    y: 900,
                    duration: 500,
                    scale: { from: 1, to: 5},
            },
            {       x: 1100,
                    y: centerY + 18,
                    duration: 1,
                    scale: { from: 5, to: 0.1},
            }]
            
            })
            
        })
    
       //bottom left roadline group

       //creating road left back group
       let roadLeftB = this.add.group({
            key: "roadline",
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
                    x: 0,
                    y: 900,
                    duration: 500,
                    scale: { from: 1, to: 5},
            },
            {       x: 200,
                    y: centerY + 18,
                    duration: 1,
                    scale: { from: 5, to: 0.1},
            }]
            
            })
            
        })

       //top right roadline group

       //creating road right front group
       let roadRightF = this.add.group({
        key: "roadlineR",
        loop: -1,
        delay: 100,
        setXY: {
            x: 1000,
            y: centerY + 70,
        },

    });

    //creating animations for rrf group
    roadRightF.children.iterate(child => {
        this.tweens.chain({
            targets: child,
            ease: "Quint.easeIn",
            duration: 2000,
            //delay: 1000,
            repeat: -1,
            repeatDelay: 0,
            loop: -1,
            tweens: [{
                x: 900,
                y: centerY,
                duration: 400,
                scale: { from: 1.75, to: 0.1},
        },
        {       x: 1000,
                y: centerY + 70,
                duration: 1,
                scale: { from: 0.1, to: 0.1},
        }]
        
        })
        
    })

     //top left roadline group

     //creating road left front group
     let roadLeftF = this.add.group({
        key: "yellowline",
        loop: -1,
        delay: 100,
        setXY: {
            x: 275,
            y: centerY + 70,
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
                x: 375,
                y: centerY,
                duration: 400,
                scale: { from: 1.75, to: 0.1},
        },
        {       x: 275,
                y: centerY + 70,
                duration: 1,
                scale: { from: 0.1, to: 0.1},
        }]
        
        })
        
    })

       //creating rear view mirror outline
        this.mirror = this.add.sprite(centerX, 250, "rearview");
        this.mirror.setScale(0.75);
        this.mirror.setDepth(11);

        // configure main camera 
        this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
        this.cameras.main.setZoom(1);

        // startFollow(target [, roundPixels] [, lerpX] [, lerpY] [, offsetX] [, offsetY])
        this.cameras.main.startFollow(this.roadCenter, true, 0.1, 0.1);
        // set camera dead zone

    }

    //allows for line movement (still needs to be updated)

    redraw(directionLeft) {
        //this.graphics.clear();
        //this.graphics2.clear();
 

        if (directionLeft == true){
            //if moving left
            if(scootch_countL <= 25){
                scootch_countL += 1;
                scootch_countR -= 1;
            }
            console.log("L: " + scootch_countL + " R: " + scootch_countR);
            //if(scootch_countL % 5 == 0 ){
                console.log("i moved left");
                this.lineLeft.destroy();
                this.lineLeft.add(new Phaser.Curves.Line([centerX - 100 - scootch_countL, centerY, 0  - scootch_countL, 720 ]));
                if(scootch_countR <= -10 ){
                    this.lineRight.destroy();
                    this.lineRight.add(new Phaser.Curves.Line([centerX + 100 + scootch_countR, centerY, 1280 + scootch_countR, 720 ]));
                }
           // }
        } else {
            //if moving right
            if(scootch_countR <= 25){
                scootch_countL -= 0.5;
                scootch_countR += 0.5;
            }
            console.log("L: " + scootch_countL + " R: " + scootch_countR);
            //if(scootch_countR % 5 == 0 ){
                console.log("i moved right");
                this.lineRight.destroy();
                this.lineRight.add(new Phaser.Curves.Line([centerX + 100 - scootch_countR, centerY, 1280 - scootch_countR , 720 ]));
                if(scootch_countL <= -10 ){
                    this.lineLeft.destroy();
                    this.lineLeft.add(new Phaser.Curves.Line([centerX - 100 + scootch_countL, centerY, 0 + scootch_countL, 720 ]));
                }
            //}
      
            //console.log("L: " + scootch_countL + " R: " + scootch_countR);
         

            //this.lineLeft.add(new Phaser.Curves.Line([centerX - 100 + scootch_countR/2, centerY, 0 + scootch_countR/2, 720 ]));
            //this.lineRight.add(new Phaser.Curves.Line([centerX + 100 + 2*scootch_countR, centerY, 1280 + 2*scootch_countR, 720 ]));
        }


    }
    

    update() {

        this.road.tilePositionY -= 5;
        this.roadBack.tilePositionY += 5;
        
        //this.graphics.clear();
        //this.graphics.lineStyle(5, 0xFDFD32, 1);

        //this.graphics2.clear();
        //this.graphics2.lineStyle(5, 0xffffff, 1);

        //this.lineLeft.draw(this.graphics);
        //this.lineRight.draw(this.graphics2);

        //this.lineLeft.getPoint(this.follower.t, this.follower.vec);
        //this.lineRight.getPoint(this.follower2.t, this.follower2.vec);

        //this.graphics.fillStyle(0xFDFD32, 1);
        //this.graphics.fillRect(this.follower.vec.x - 8, this.follower.vec.y - 8, 16, 16);

        //this.graphics2.fillStyle(0xffffff, 1);
        //this.graphics2.fillRect(this.follower2.vec.x - 8, this.follower2.vec.y - 8, 16, 16);

        if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
            //console.log("left down");
            //this.car.setAccelerationX(-20);
            this.car.x -= 5;
            //this.roadCenter.x -= 5;
            //this.redraw(true);
        } 
        else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
            //console.log("right down");
            this.car.x += 5;
            //this.roadCenter.x += 5;
            //this.redraw(false);
            //this.car.setAccelerationX(20);
        }
    }
    

}