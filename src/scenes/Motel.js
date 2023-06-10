class Motel extends Phaser.Scene {
    constructor() {
        super("motelScene");
    }
    create() {
        console.log("in motelScene");

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE.enabled = true;

        //setting world bounds
        this.physics.world.bounds.setTo(0, 0, game.config.width, game.config.height);
        this.physics.world.setBoundsCollision(true, true, true, true); // check left and right, up and down

        this.floor = this.add.sprite(-50, -50, "floorPlan").setOrigin(0);
        //this.floor.setScale(1.09);

        //this.roadMap = this.add.sprite(0, 0, "roadMap").setOrigin(0);
        
        this.Marion = this.physics.add.sprite(centerX, centerY, "Marion");
        this.Marion.setSize(35, 150)
        this.Marion.setCollideWorldBounds(true);
        this.Marion.setImmovable(true);
        this.Marion.setDebugBodyColor(0xFACADE);
        this.Marion.setScale(0.9)

        this.Marionint = this.physics.add.sprite(centerX, centerY + 40).setOrigin(0.5);
        this.Marionint.setSize(40, 74);
        this.Marionint.setCollideWorldBounds(true);
        this.Marionint.setImmovable(true);
        this.Marionint.setDebugBodyColor(0xFACADE);

        /*this.Mariontop = this.physics.add.sprite(centerX, centerY).setOrigin(0.5);
        this.Mariontop.setSize(50, 80);
        this.Mariontop.setCollideWorldBounds(true);
        this.Mariontop.setImmovable(true);
        this.Mariontop.setDebugBodyColor(0xFACADE);
        this.physics.add.collider(this.Marionint, this.Mariontop);*/

    }

    /*stop() {
        if (this.physics.collide(this.Marion, this.physics.world.bounds
    }*/
   
    update() {
        this.physics.collide(this.Marion, this.Marionint, /*this.stop(), this.topCollide()*/);
        this.physics.collide(this.Marion, this.Mariontop);
        //this.physics.collide(this.Marionint, this.Mariontop);
        this.direction = new Phaser.Math.Vector2(0);
        if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)){
            this.direction.x = -1;
        } else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)) {
            this.direction.x = 1;
        }
        if(this.input.keyboard.checkDown(keyW) || this.input.keyboard.checkDown(keyUP)){
            this.direction.y = -1;
        } else if (this.input.keyboard.checkDown(keyS) || this.input.keyboard.checkDown(keyDOWN)) {
            this.direction.y = 1;
        }

        this.direction.normalize();
        this.Marion.setVelocity(150 * this.direction.x, 150 * this.direction.y);
        this.Marionint.setVelocity(150 * this.direction.x, 150 * this.direction.y);
        //this.Mariontop.setVelocity(150 * this.direction.x, 150 * this.direction.y);

    }
}
