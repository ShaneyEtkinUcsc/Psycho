class Drive extends Phaser.Scene {
    constructor() {
        super("driveScene");
    }

    create() {
        console.log("in driving");


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE.enabled = true;

        this.physics.world.bounds.setTo(0, 0, game.config.width, game.config.height);
        this.physics.world.setBoundsCollision(true, true, false, false); // check left and right, not up or down


        this.back1 = this.add.rectangle(0, 0, 1280, 720, 0xFFFFFF).setOrigin(0);
        this.back2 = this.add.rectangle(0, 0, 1280, 360, 0xDC3C28).setOrigin(0);
        this.roadbase = this.add.rectangle(0, centerY, 1280, 720, 0x2B2B2B).setOrigin(0);
        this.car = this.physics.add.sprite(centerX, 650, "cartemp");
        this.roadCenter = this.physics.add.sprite(centerX, centerY, "cartemp");
        this.roadCenter.setAlpha(0);
        this.roadCenter.setSize(200, 30, true);
        this.roadCenter.setCollideWorldBounds(true);

        this.car.setSize(200, 30, true);
        this.car.setCollideWorldBounds(true);
        this.car.setImmovable(true);
        //this.car.body.setDragX(375);

        const zone = this.add.zone(centerX, centerY, 200, 30);
        
        this.graphics = this.add.graphics();
        this.graphics2 = this.add.graphics();
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        this.follower2 = { t: 0, vec: new Phaser.Math.Vector2() };
        this.lineLeft = this.add.path();
        this.lineLeft.add(new Phaser.Curves.Line([centerX - 100, centerY, 0, 720]));
        this.lineRight = this.add.path();
        this.lineRight.add(new Phaser.Curves.Line([centerX + 100, centerY, 1280, 720]));
        this.tweens.add({
            targets: this.follower,
            t: 1,
            ease: 'Linear',
            duration: 4000,
            //yoyo: true,
            repeat: -1
        });
        this.tweens.add({
            targets: this.follower2,
            t: 1,
            ease: 'Linear',
            duration: 4000,
            //yoyo: true,
            repeat: -1
        });
        this.graphics3 = this.add.graphics();
        this.graphics3.lineStyle(6, 0x000000, 1);

        //  32px radius on the corners
        this.graphics3.strokeRoundedRect(centerX - 300, 50, 600, 200, 48);

        // configure main camera 
        this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
        this.cameras.main.setZoom(0.99);
        // have camera follow copter
        // startFollow(target [, roundPixels] [, lerpX] [, lerpY] [, offsetX] [, offsetY])
        this.cameras.main.startFollow(this.roadCenter, true, 0.1, 0.1);
        // set camera dead zone

    }

    redraw(directionLeft) {
        this.graphics.clear();
        //this.graphics2.clear();
        this.lineLeft.destroy();
        this.lineRight.destroy();

        if (directionLeft == true){
            //if moving left
            scootch_countL += 1;
            scootch_countR -= 1;
            //console.log("L: " + scootch_countL + " R: " + scootch_countR);
            this.lineLeft.add(new Phaser.Curves.Line([centerX - 100 - 2 * scootch_countL, centerY, 0 - 2 * scootch_countL, 720 + 2 * scootch_countL]));
            this.lineRight.add(new Phaser.Curves.Line([centerX + 100 - scootch_countL/2, centerY, 1280 - scootch_countL/2, 720 + scootch_countL/2]));
        } else {
            //if moving right
            scootch_countL -= 1;
            scootch_countR += 1;
            //console.log("L: " + scootch_countL + " R: " + scootch_countR);
            this.lineLeft.add(new Phaser.Curves.Line([centerX - 100 + scootch_countR/2, centerY, 0 + scootch_countR/2, 720 - scootch_countR/2]));
            this.lineRight.add(new Phaser.Curves.Line([centerX + 100 + 2*scootch_countR, centerY, 1280 + 2*scootch_countR, 720 - 2*scootch_countR]));
        }


    }
    

    update() {
        
        this.graphics.clear();
        this.graphics.lineStyle(5, 0xFDFD32, 1);

        this.graphics2.clear();
        this.graphics2.lineStyle(5, 0xffffff, 1);

        this.lineLeft.draw(this.graphics);
        this.lineRight.draw(this.graphics2);

        this.lineLeft.getPoint(this.follower.t, this.follower.vec);
        this.lineRight.getPoint(this.follower2.t, this.follower2.vec);

        this.graphics.fillStyle(0xFDFD32, 1);
        this.graphics.fillRect(this.follower.vec.x - 8, this.follower.vec.y - 8, 16, 16);

        this.graphics2.fillStyle(0xffffff, 1);
        this.graphics2.fillRect(this.follower2.vec.x - 8, this.follower2.vec.y - 8, 16, 16);

        if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
            //console.log("left down");
            //this.car.setAccelerationX(-20);
            this.car.x -= 5;
            this.roadCenter.x -= 2;
            this.redraw(true);
        } 
        else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
            //console.log("right down");
            this.car.x += 5;
            this.roadCenter.x += 2;
            this.redraw(false);
            //this.car.setAccelerationX(20);
        }
    }
    

}