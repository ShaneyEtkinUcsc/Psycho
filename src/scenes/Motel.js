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

        //creating tile map
        const map = this.add.tilemap("MotelMapJSON");
        const motel = map.addTilesetImage("MotelSet", "MotelMapImage");

        //adding tile map layers
        const floor = map.createLayer("Background", motel, -692, -434).setOrigin(0);
        const furniture = map.createLayer("Furniture", motel, -692, -434).setOrigin(0);
        const paintings = map.createLayer("Paintings", motel, -692, -434).setOrigin(0);


        //this.floor = this.add.sprite(-50, -50, "floorPlan").setOrigin(0);
        //this.floor.setScale(1.09);

        //this.roadMap = this.add.sprite(0, 0, "roadMap").setOrigin(0);
        
        this.Marion = this.physics.add.sprite(300, 400, "Marion");
        this.Marion.setSize(35, 150)
        this.Marion.setCollideWorldBounds(true);
        this.Marion.setImmovable(true);
        this.Marion.setDebugBodyColor(0xFACADE);
        this.Marion.setScale(0.9)

        //creating Marion's animations
        this.anims.create({
            key: "walkR",
            frames: [
                {key: "Marion", frame: "Marion1"},
                {key: "Marion", frame: "Marion2"},
                {key: "Marion", frame: "Marion3"},
                {key: "Marion", frame: "Marion4"},
                {key: "Marion", frame: "Marion5"},
                {key: "Marion", frame: "Marion6"},
            ],
            frameRate: 12,
        });

         //enable collision

         floor.setCollisionByProperty({ collides: true});
         furniture.setCollisionByProperty({ collides: true});
         this.physics.add.collider(this.Marion, floor);
         this.physics.add.collider(this.Marion, furniture);
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

    }
}
