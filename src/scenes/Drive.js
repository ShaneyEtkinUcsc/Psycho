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


        this.back1 = this.add.rectangle(0, 0, 2560, 720, 0xFFFFFF).setOrigin(0);
        this.car = this.physics.add.sprite(centerX, 650, "cartemp");
        this.car.setSize(400, 30, true);
        this.car.setCollideWorldBounds(true);
        this.car.setImmovable(true);
        //this.car.body.setDragX(375);

        // configure main camera 
        //this.cameras.main.setBounds(0, 0, 1280, 720);
        //this.cameras.main.setZoom(0.75);
        // have camera follow copter
        // startFollow(target [, roundPixels] [, lerpX] [, lerpY] [, offsetX] [, offsetY])
        //this.cameras.main.startFollow(this.car, true, 0.1, 0.1);
        // set camera dead zone

    }

    update() {
        if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
            console.log("left down");
            //this.car.setAccelerationX(-20);
            this.car.x -= 5;
        } 
        else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)){
            console.log("right down");
            this.car.x += 5;
            //this.car.setAccelerationX(20);
        }
    }

}