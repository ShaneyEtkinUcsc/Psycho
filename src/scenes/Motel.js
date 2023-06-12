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

        //adding overlap boxes
        this.desk = this.physics.add.sprite(80, 350).setOrigin(0.5);
        this.desk.setSize(40, 100);
        this.desk.body.onOverlap = true;

        this.chair1 = this.physics.add.sprite(100, 500).setOrigin(0.5);
        this.chair1.setSize(40, 120);
        this.chair1.body.onOverlap = true;

        this.chair2 = this.physics.add.sprite(620, 115).setOrigin(0.5);
        this.chair2.setSize(120, 40);
        this.chair2.body.onOverlap = true;

        this.chair3 = this.physics.add.sprite(1075, 110).setOrigin(0.5);
        this.chair3.setSize(40, 120);
        this.chair3.body.onOverlap = true;

        this.paintingSet = this.physics.add.sprite(330, 280).setOrigin(0.5);
        this.paintingSet.setSize(200, 25);
        this.paintingSet.body.onOverlap = true;

        this.largePainting = this.physics.add.sprite(318, 570).setOrigin(0.5);
        this.largePainting.setSize(175, 35);
        this.largePainting.body.onOverlap = true;

        this.bathroomDoor = this.physics.add.sprite(150, 275).setOrigin(0.5);
        this.bathroomDoor.setSize(100, 25);
        this.bathroomDoor.body.onOverlap = true;

        this.motelDoor = this.physics.add.sprite(1120, 250).setOrigin(0.5);
        this.motelDoor.setSize(100, 100);
        this.motelDoor.body.onOverlap = true;

        this.lockedDresser = this.physics.add.sprite(500, 490).setOrigin(0.5);
        this.lockedDresser.setSize(150, 30);
        this.lockedDresser.body.onOverlap = true;

        this.plainDresser = this.physics.add.sprite(1065, 445).setOrigin(0.5);
        this.plainDresser.setSize(30, 175);
        this.plainDresser.body.onOverlap = true;

        this.keyDresser = this.physics.add.sprite(835, 120).setOrigin(0.5);
        this.keyDresser.setSize(250, 30);
        this.keyDresser.body.onOverlap = true;

        this.closet = this.physics.add.sprite(400, 125).setOrigin(0.5);
        this.closet.setSize(100, 250);
        this.closet.body.onOverlap = true;

        this.bed = this.physics.add.sprite(850, 500).setOrigin(0.5);
        this.bed.setSize(40, 200);
        this.bed.body.onOverlap = true;

        //adding closeup objects

        this.anims.create({
            key: "open",
            frames: [
                { key: "desk2C" },
                { key: "desk2O" },
            ],
            framerate: 12,
        });

        this.deskCloseUp = this.add.sprite(centerX, centerY - 100, "desk1").setRotation(1.5708).setScale(5).setAlpha(0);
        this.keyDresserCloseUp = this.add.sprite(centerX, centerY - 100, "desk2C").setScale(2.5).setAlpha(0);

       
        

        //enable collisions

        floor.setCollisionByProperty({ collides: true});
        furniture.setCollisionByProperty({ collides: true});
        this.physics.add.collider(this.Marion, floor);
        this.physics.add.collider(this.Marion, furniture);
        
        //enabling overlaps
        
        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            if(obj2 === this.desk){
                console.log(`${obj1.texture.key} body is overlapping this.desk`);
            } else if(obj2 === this.chair1){
                console.log(`${obj1.texture.key} body is overlapping this.chair1`);
            } else if( obj2 === this.chair2){
                console.log(`${obj1.texture.key} body is overlapping this.chair2`);
            } else if( obj2 === this.chair3){
                console.log(`${obj1.texture.key} body is overlapping this.chair3`);
            } else if( obj2 === this.paintingSet){
                console.log(`${obj1.texture.key} body is overlapping this.paintingSet`);
            } else if( obj2 === this.largePainting){
                console.log(`${obj1.texture.key} body is overlapping this.largePainting`);
            } else if( obj2 === this.bathroomDoor){
                console.log(`${obj1.texture.key} body is overlapping this.bathroomDoor`);
            } else if( obj2 === this.motelDoor){
                console.log(`${obj1.texture.key} body is overlapping this.motelDoor`);
            } else if( obj2 === this.lockedDresser){
                console.log(`${obj1.texture.key} body is overlapping this.lockedDresser`);
            } else if( obj2 === this.plainDresser){
                console.log(`${obj1.texture.key} body is overlapping this.plainDresser`);
            } else if( obj2 === this.keyDresser){
                console.log(`${obj1.texture.key} body is overlapping this.keyDresser`);
            } else if( obj2 === this.closet){
                console.log(`${obj1.texture.key} body is overlapping this.closet`);
            } else if (obj2 === this.bed) {
                console.log(`${obj1.texture.key} body is overlapping this.bed`);
            }
        });




    }

    overlap(item){
        if(item === "desk"){
            console.log ("overlap with this.desk!");
        }
    }

    /*stop() {
        if (this.physics.collide(this.Marion, this.physics.world.bounds
    }*/
   
    update() {
        this.physics.collide(this.Marion, this.Marionint, /*this.stop(), this.topCollide()*/);
        this.physics.collide(this.Marion, this.Mariontop);
        this.physics.overlap(this.Marion, this.desk);
        this.physics.overlap(this.Marion, this.chair1);
        this.physics.overlap(this.Marion, this.chair2);
        this.physics.overlap(this.Marion, this.chair3);
        this.physics.overlap(this.Marion, this.paintingSet);
        this.physics.overlap(this.Marion, this.largePainting);
        this.physics.overlap(this.Marion, this.bathroomDoor);
        this.physics.overlap(this.Marion, this.motelDoor);
        this.physics.overlap(this.Marion, this.lockedDresser);
        this.physics.overlap(this.Marion, this.plainDresser);
        this.physics.overlap(this.Marion, this.keyDresser);
        this.physics.overlap(this.Marion, this.closet);
        this.physics.overlap(this.Marion, this.bed);
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

        /* let bgMusic = this.sound.get("hotelMusic");
         if(!bgMusic.isPlaying) {
            bgMusic.play(musicConfig);
        }*/

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
