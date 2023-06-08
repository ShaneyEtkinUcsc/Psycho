class Drive2 extends Phaser.Scene {
    constructor() {
        super("drive2Scene");
    }


    create() {
        //keeping track of player's scene visits
        visited2twice += 1;
        console.log("visited2twice: " + visited2twice);
        console.log("in driving2");
        console.log(positionX);

        //setting up music for drive scenes
        var musicConfig = {
            mute: false,
            volume: 0.1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        let bgMusic = this.sound.get("menuMusic");
        if(!bgMusic.isPlaying) {
            bgMusic.play(musicConfig);
        }

        //importing siren sound for offRoad instances
        this.sirenSound = this.sound.get("siren");

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE.enabled = true;

        //adding assets
        this.back = this.add.tileSprite(0 + paraPos, 0, 1280, 720, "skyline").setOrigin(0);
        this.carInt = this.add.sprite(0, 0, "interior").setOrigin(0);
        this.Marion = this.add.sprite(400, 0, "face").setOrigin(0).setScale(1.2);
        this.wheel = this.add.sprite(670, 660, "wheel").setOrigin(0.5).setScale(1.8);
        this.exclamation = this.add.sprite(30, centerY - 250, "exclamation").setOrigin(0.5).setScale(3).setAlpha(0);
        this.waitArrow = this.add.sprite(200, 40, "triangle").setOrigin(0.5).setAngle(-90).setAlpha(0);
       
        //adding random position arrays for random generator to use
        this.position = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
        this.driftLeft = [-20, -30, -40, -50, -60, -70, -80, -100 -150, -160];
        this.driftRight = [20, 30, 40, 50, 60, 70, 80, 100, 150, 160];

        //adding look back indicator
        let checkConfig = {
            fontFamily: 'SanJose',
            fontSize: '70px',
            //backgroundColor: '#ffffff',
            color: '#eb4034',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //adding tutorial text
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

        this.lookback = this.add.text(centerX - 300, 40, "CHECK", checkConfig).setOrigin(0.5).setAlpha(0.5);
        if(visited2twice <= 1){
            this.tutorial = this.add.text(30, centerY - 50, "'A' and 'D' or '←' and '→' to move", tutorialConfig).setOrigin(0);
            this.tutorial2 = this.add.text(30, centerY, " press 'W' or '↑' to flip the camera\n when CHECK is ready", tutorialConfig).setOrigin(0);
        }
    
       //making car bounce
       let carBounce = this.tweens.chain({
            targets: this.carInt,
            ease: "Bounce.easeOut",
            duration: 100,
            repeat: -1,
            loop: -1,
            tweens: [{
                    y: 0,
                    duration: 100,
            },
            {       y: 0.75,
                    duration: 100,
            }]
            
        })

        // making Marion bounce
        let carBounceM = this.tweens.chain({
            targets: this.Marion,
            ease: "Bounce.easeOut",
            duration: 100,
            repeat: -1,
            loop: -1,
            tweens: [{
                    y: 0,
                    duration: 100,
            },
            {       y: 1,
                    duration: 100,
            }]
            
        });

        // making wheel bounce
        let carBounceW = this.tweens.chain({
            targets: this.wheel,
            ease: "Bounce.easeOut",
            duration: 100,
            repeat: -1,
            loop: -1,
            tweens: [{
                    y: 660,
                    duration: 100,
            },
            {       y: 661,
                    duration: 100,
            }]
            
        });

        let bounce = this.tweens.add({
            targets: this.waitArrow,
            x: (this.waitArrow.x + 25),
            ease: 'Quad.Out',
            duration: 1000,
            yoyo: true,
            repeat: -1,
            loop: -1,
        });

        //camera switch to pass across scenes
        lookable = false;
        if(visited2twice <= 1){
            this.time.delayedCall(7000, () => {
                lookable = true;
                this.waitArrow.setAlpha(1);
                this.lookback.setAlpha(1);
                console.log("you can look now");
            });
        }
       
        // create the scene's dialouge boxes
        this.boxBundle1 = new dialogBoxBundle(this, [
            //['hide', 'right1'],
            //['hide', 'left1'],
            //['sound', "audio1"],
            ['bottom2', "Yes Mr. Lowery?"],
            //['sound', "audio2"],
            ['bottom2', "Caroline, Marion still isn't in?"],
            //['sound', "audio3"],
            ['bottom2', "No Mr. Lowery, but then again she's always a bit late on Monday mornings."],
            //['sound', "audio4"],
            ['bottom2', "Buzz me the moment she comes in."],
            ['end', "talk1"]
        ], true);
        this.boxBundle2 = new dialogBoxBundle(this, [
            //['sound', "audio5"],
            ['bottom2', "Well, call her sister. No one is answering at the house."],
            //['sound', "audio6"],
            ['bottom2', "I called her sister Mr. Lowery, where she works. The music maker's music store you know,"],
            //['sound', "audio7"],
            ['bottom2', "and she doesn't know where Marion is anymore than we do."],
            //['sound', "audio8"],
            ['bottom2', "You better run to the house. She may be unable to answer the phone."],
            //['sound', "audio9"],
            ['bottom2', "Her sister is going to do that, she's as worried as we are."],
            ['end', "talk2"]
        ], true);
        this.boxBundle3 = new dialogBoxBundle(this, [
            //['sound', "audio10"],
            ['bottom2', "No, I haven't the faintest idea. As I said, I last saw your sister when she left this office on Friday,"],
            //['sound', "audio11"],
            ['bottom2', "said she didn't feel well, and wanted to leave early, and I said she could."],
            //['sound', "audio12"],
            ['bottom2', "That was the last I saw her."],
            //['sound', "audio13"],
            ['bottom2', "Wait a minute. I did see her sometime later driving..."],
            //['sound', "audio14"],
            ['bottom2', "Uh, I think you'd better come over here to my office quick."],
            //['sound', "audio15"],
            ['bottom2', "Caroline, get Mr. Cassidy for me."],
            ['end', "talk3"]
        ], true);
        this.boxBundle4 = new dialogBoxBundle(this, [
            //['sound', "audio16"],
            ['bottom2', "After all Cassidy, I told you all that cash. I'm not taking the responsibility."],
            //['sound', "audio17"],
            ['bottom2', "Oh for heavens sake, girl works for you for 10 years, you trust her."],
             //['sound', "audio18"],
            ['bottom2', "Alright, yes, you should probably come over."],
            ['end', "talk4"]
        ], true);
        this.boxBundle5 = new dialogBoxBundle(this, [
            //['sound', "audio19"],
            ['bottom2', "I'm not about to kiss our $40,000 goodbye."],
            //['sound', "pause"],
            ['bottom2', "I'll get it back and if any of it is missing I will replace it with her fine soft flesh."],
            //['sound', "audio20"],
            ['bottom2', "I'll track her down, never you doubt it."],
            //['sound', "audio21"],
            ['bottom2', "Now hold on Cassidy, I still can't believe... it must be some kind of a mystery. I can't-"],
            //['sound', "audio21"],
            ['bottom2', "You check the bank no? They never laid eyes on her no? You still trusting?"],
            //['sound', "audio21"],
            ['bottom2', "Hot creeper. She sat there while I dumped it out, hardly even looked at it."],
            //['sound', "audio21"],
            ['bottom2', "Planning, and even flirting with me too."],
            ['end', "talk5"]
        ], true);

        //creating random movement generation timer
        this.timer = 0;
        this.lastPosition = 0;
    }

    offRoad(sirenSound) {

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
        
        if(!sirenSound.isPlaying) {
            sirenSound.play(sfxConfig);
        }
        offRoad = true;
        if(this.tutorial){
            this.tutorial.destroy();
            this.tutorial2.destroy();
        }
        this.add.text(centerX, centerY, "GAME OVER", gameOverConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 50, "Press S to restart", gameOverConfig).setOrigin(0.5);

    }

    //I got this random generation from 
    //https://rexrainbow.github.io/phaser3-rex-notes/docs/site/random-data-generator/
    roadMovementGen() {
        if(!offRoad){
            var rnd = Phaser.Math.RND;
            let newPosition = rnd.pick(this.position);
            if(this.lastPosition + newPosition <= -1){
                let driftLeft = rnd.pick(this.driftLeft);
                console.log("Position changed by: " + driftLeft);
                positionX += driftLeft;
                this.lastPosition = newPosition;
            } else if (this.lastPosition + newPosition >= 1 ){
                let driftRight = rnd.pick(this.driftRight);
                console.log("Position changed by: " + driftRight);
                positionX += driftRight;
                this.lastPosition = newPosition;
            }
            
        }
    }

    //resetting globalVariables on a restart
    reset() {
        //resetting position
        this.sirenSound.stop();
        positionX = 0;
        paraPos = 0;
        talkPosition = 0;
        //resetting camera switch to pass across scenes
        lookable = false;
        shakeL = -222;
        shakeR = 222;
        visitedtwice = 0;
        visited2twice = 0;
        //resetting gameOver condition to pass across scenes
        offRoad = false;
        offRoadL = -392;
        offRoadR = 392;
        this.scene.restart();
    }

    update(time, delta) {
        //setting random position
        if(visited2twice >= 1){
            this.timer += delta;
            while (this.timer > 3000) {
                this.roadMovementGen();
                this.timer -= 3000;
            }
        }
        if(!offRoad){
            //setting up dialouge calls
            if(visited2twice = 1){
                if(talkPosition == 1){
                    this.boxBundle1.update();
                   if (this.boxBundle1.scriptFinished === "talk1"){
                        lookable = true;
                        this.waitArrow.setAlpha(1);
                        this.lookback.setAlpha(1);
                    }
                } else if (talkPosition == 2){
                    this.boxBundle2.update();
                    if (this.boxBundle2.scriptFinished === "talk2"){
                        lookable = true;
                        this.waitArrow.setAlpha(1);
                        this.lookback.setAlpha(1);
                    }
                } else if (talkPosition == 3){
                    this.boxBundle3.update();
                    if (this.boxBundle3.scriptFinished === "talk3"){
                        lookable = true;
                        this.waitArrow.setAlpha(1);
                        this.lookback.setAlpha(1);
                    }
                } else if (talkPosition == 4){
                    this.boxBundle4.update();
                    if (this.boxBundle4.scriptFinished === "talk4"){
                        lookable = true;
                        this.waitArrow.setAlpha(1);
                        this.lookback.setAlpha(1);
                    }
                } else if (talkPosition == 5){
                    this.boxBundle5.update();
                    if (this.boxBundle5.scriptFinished === "talk5"){
                        lookable = true;
                        this.waitArrow.setAlpha(1);
                        this.lookback.setAlpha(1);
                    }
                }
            }
            //enabling offRoad conditions
            if(positionX <= offRoadL || positionX >= offRoadR){
                this.offRoad(this.sirenSound);
                positionX = 0;
            }
            //goingOff indications
            if(positionX <= shakeL || positionX >= shakeR){
                console.log("camera shake triggered");
                this.cameras.main.shake(1000, 0.0005, false); 
                if(positionX <= shakeL){
                    this.exclamation.x = 1230;
                    this.exclamation.setAlpha(1);
                } else if (positionX >= shakeR) {
                    this.exclamation.x = 50;
                    this.exclamation.setAlpha(1);
                }
            } else {
                //making the exclamation invisible since no danger is present
                this.exclamation.setAlpha(0);
            }

            if((Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyUP)) && lookable == true){
                console.log("up down");
                this.lookback.setAlpha(0.5);
                this.scene.start("driveScene");
            
                //this.roadCenter.x -= 5;
                //this.redraw(true);
            } else if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
                console.log("left down");
                if (this.wheel.angle >= -30) this.wheel.angle -= 0.5;
                if (this.back.tilePositionX >= 0) this.back.tilePositionX -= 0.25;
                if(positionX <= 400){
                    paraPos += 0.25;
                    positionX += 2;
                }
                console.log(positionX);
            
                //this.roadCenter.x -= 5;
                //this.redraw(true);
            } 
            else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
                console.log("right down");
                if (this.wheel.angle <= 30) this.wheel.angle += 0.5;
                if(this.back.tilePositionX <= 33) this.back.tilePositionX += 0.25;
                if(positionX >= -400){
                    paraPos -= 0.25;
                    positionX -= 2;
                }
                console.log(positionX);
          
            } else {
                if (this.wheel.angle < -1) this.wheel.angle += 0.5;
                else if (this.wheel.angle > 1) this.wheel.angle -= 0.5;
                else(this.wheel.angle = 0);

            }
        } else if (offRoad){
            if(Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyDOWN)){
                console.log("down down");
                this.reset();
    
                }
            }
    }

}
