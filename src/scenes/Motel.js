class Motel extends Phaser.Scene {
    constructor() {
        super("motelScene");
    }
    create() {

        // camera fade in effect
        //this.cameras.main.fadeIn(2000, 0, 0);

        console.log("in motelScene");

        //adding music
        this.sound.add("hotelMusic")
        

       this.Mfootsteps = this.sound.add("Mfootsfx");
       //this.Mfootsteps = this.sound.get("Mfootsfx");

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
                {key: "Marion", frame: "Marion1.png"},
                {key: "Marion", frame: "Marion2.png"},
                {key: "Marion", frame: "Marion3.png"},
                {key: "Marion", frame: "Marion4.png"},
                {key: "Marion", frame: "Marion5.png"},
                {key: "Marion", frame: "Marion6.png"},
            ],
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: "idle",
            frames: [
                {key: "Marion", frame: "Marion1.png"},
            ],
            frameRate: 12,
        });

        this.anims.create({
            key: "walkUp",
            frames: [
                {key: "Marion", frame: "MarionUpDown1.png"},
                {key: "Marion", frame: "MarionUpDown2.png"},
                {key: "Marion", frame: "MarionUpDown3.png"},
                {key: "Marion", frame: "MarionUpDown4.png"},
                {key: "Marion", frame: "MarionUpDown5.png"},
                {key: "Marion", frame: "MarionUpDown6.png"},
                {key: "Marion", frame: "MarionUpDown7.png"},
                {key: "Marion", frame: "MarionUpDown8.png"},
            ],
            frameRate: 12,
            repeat: -1
        });

         //enable collision

         floor.setCollisionByProperty({ collides: true});
         furniture.setCollisionByProperty({ collides: true});
         this.physics.add.collider(this.Marion, floor);
         this.physics.add.collider(this.Marion, furniture);

        //adding overlap boxes
        this.desk1 = this.physics.add.sprite(40, 400);



    }

    /*stop() {
        if (this.physics.collide(this.Marion, this.physics.world.bounds
    }*/
   
    update() {
        this.physics.collide(this.Marion, this.Marionint, /*this.stop(), this.topCollide()*/);
        this.physics.collide(this.Marion, this.Mariontop);
        //this.physics.collide(this.Marionint, this.Mariontop);
        this.direction = new Phaser.Math.Vector2(0);

        var musicConfig = {
            mute: false,
            volume: 3,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
         }

         let bgMusic = this.sound.get("hotelMusic");
         if(!bgMusic.isPlaying) {
            bgMusic.play(musicConfig);
        }

        //checking up and down movement and playing corresponding animation and sound
        if(this.input.keyboard.checkDown(keyW) || this.input.keyboard.checkDown(keyUP) && this.direction.x == 0){
            this.direction.y = -1;
            this.Marion.flipX = false;
            this.Marion.anims.play("walkUp", true);
            if(!this.Mfootsteps.isPlaying) {
                this.Mfootsteps.play(musicConfig);
            }
        } else if (Phaser.Input.Keyboard.JustUp(keyW) || Phaser.Input.Keyboard.JustUp(keyUP) && this.direction.x == 0){
            this.Marion.anims.play("idle", true); 
            if(this.Mfootsteps.isPlaying) {
                this.Mfootsteps.stop();
            }
        } else if (this.input.keyboard.checkDown(keyS) || this.input.keyboard.checkDown(keyDOWN) && this.direction.x == 0) {
            this.direction.y = 1;
            this.Marion.flipX = true;
            this.Marion.anims.play("walkUp", true);
            if(!this.Mfootsteps.isPlaying) {
                this.Mfootsteps.play(musicConfig);
            }
        } else if (Phaser.Input.Keyboard.JustUp(keyS) || Phaser.Input.Keyboard.JustUp(keyDOWN) && this.direction.x == 0){
            this.Marion.anims.play("idle", true); 
            if(this.Mfootsteps.isPlaying) {
                this.Mfootsteps.stop();
            }
        }

        //checking left and righ movement
        if(this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT) && this.direction.y == 0){
            this.direction.x = -1;
            this.Marion.flipX = false;
            this.Marion.anims.play("walkR", true);
            if(!this.Mfootsteps.isPlaying) {
                this.Mfootsteps.play(musicConfig);
            }
        } else if (Phaser.Input.Keyboard.JustUp(keyA) || Phaser.Input.Keyboard.JustUp(keyLEFT) && this.direction.y == 0){
            this.Marion.anims.play("idle", true);
            if(this.Mfootsteps.isPlaying) {
                this.Mfootsteps.stop();
            }
        } else if (this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT) && this.direction.y == 0){
            this.direction.x = 1;
            this.Marion.flipX = true;
            this.Marion.anims.play("walkR", true);
            if(!this.Mfootsteps.isPlaying) {
                this.Mfootsteps.play(musicConfig);
            }
        } else if (Phaser.Input.Keyboard.JustUp(keyD) || Phaser.Input.Keyboard.JustUp(keyRIGHT) && this.direction.y == 0){
            this.Marion.anims.play("idle", true);
            if(this.Mfootsteps.isPlaying) {
                this.Mfootsteps.stop();
            }
        }

        this.direction.normalize();
        this.Marion.setVelocity(150 * this.direction.x, 150 * this.direction.y);

        if(this.Marion.body.velocity.x > 0 && this.Marion.body.velocity.y > 0){
            this.Marion.flipX = true;
            this.Marion.anims.play("walkR", true);
        } else if(this.Marion.body.velocity.x < 0 && this.Marion.body.velocity.y > 0){
            this.Marion.flipX = false;
            this.Marion.anims.play("walkR", true);   
        }else if(this.Marion.body.velocity.x > 0 && this.Marion.body.velocity.y < 0){
            this.Marion.flipX = true;
            this.Marion.anims.play("walkR", true);
        } else if(this.Marion.body.velocity.x > 0 && this.Marion.body.velocity.y < 0){
            this.Marion.flipX = false;
            this.Marion.anims.play("walkR", true);  
        }
    }
}
