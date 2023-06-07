class Drive2 extends Phaser.Scene {
    constructor() {
        super("drive2Scene");
    }

    create() {
        console.log("in driving2");

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

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE.enabled = true;

        this.back = this.add.tileSprite(0, 0, 1280, 720, "skyline").setOrigin(0);
        this.carInt = this.add.sprite(0, 0, "interior").setOrigin(0);
        this.Marion = this.add.sprite(400, 0, "face").setOrigin(0).setScale(1.2);
        this.wheel = this.add.sprite(670, 660, "wheel").setOrigin(0.5).setScale(1.8);

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


        //drive scene quick
        //this.scene.start("driveScene");
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyUP)){
            console.log("up down");
            this.scene.start("driveScene");
            
            //this.roadCenter.x -= 5;
            //this.redraw(true);
        } else if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
            console.log("left down");
            if (this.wheel.angle >= -30) this.wheel.angle -= 1;
            if (this.back.tilePositionX >= 0) this.back.tilePositionX -= 0.5;
            
            //this.roadCenter.x -= 5;
            //this.redraw(true);
        } 
        else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
            console.log("right down");
            if (this.wheel.angle <= 30) this.wheel.angle += 1;
            if(this.back.tilePositionX <= 33) this.back.tilePositionX += 0.5;
          
        } else {
            if (this.wheel.angle < -1) this.wheel.angle += 1;
            else if (this.wheel.angle > 1) this.wheel.angle -= 1;
            else(this.wheel.angle = 0);

        }
    }

}