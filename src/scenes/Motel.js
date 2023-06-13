class Motel extends Phaser.Scene {
    constructor() {
        super("motelScene");
    }
    create() {

        // camera fade in effect
        this.cameras.main.fadeIn(2000, 0, 0);

        console.log("in motelScene");

        console.log(shown);

        //adding music
        this.sound.add("hotelMusic")
        

       this.Mfootsteps = this.sound.add("Mfootsfx");
       //this.Mfootsteps = this.sound.get("Mfootsfx");

        var musicConfig = {
            mute: false,
            volume: 5,
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
        this.Marion.setScale(0.9);
        this.Marion.setDepth(300);

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

        this.chair1 = this.physics.add.sprite(100, 550).setOrigin(0.5);
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

        this.bathroomDoor = this.physics.add.sprite(150, 270).setOrigin(0.5);
        this.bathroomDoor.setSize(100, 15);
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

        this.deskCloseUp = this.add.sprite(centerX, centerY - 150, "desk1").setRotation(1.5708).setScale(5).setAlpha(0);
        this.keyDresserCloseUp = this.add.sprite(centerX, centerY - 150, "desk2C").setScale(2.5).setAlpha(0);

       
        //enable collisions
        floor.setCollisionByProperty({ collides: true});
        furniture.setCollisionByProperty({ collides: true});
        this.physics.add.collider(this.Marion, floor);
        this.physics.add.collider(this.Marion, furniture);
        
        //enabling overlaps
        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            if(obj2 === this.desk){
                this.overlap("desk");
                console.log(`${obj1.texture.key} body is overlapping this.desk`);
            } else if(obj2 === this.chair1){
                this.overlap("chair1");
                console.log(`${obj1.texture.key} body is overlapping this.chair1`);
            } else if( obj2 === this.chair2){
                console.log(`${obj1.texture.key} body is overlapping this.chair2`);
                this.overlap("chair2");
            } else if( obj2 === this.chair3){
                console.log(`${obj1.texture.key} body is overlapping this.chair3`);
                this.overlap("chair3");
            } else if( obj2 === this.paintingSet){
                console.log(`${obj1.texture.key} body is overlapping this.paintingSet`);
                this.overlap("paintingS");
            } else if( obj2 === this.largePainting){
                console.log(`${obj1.texture.key} body is overlapping this.largePainting`);
                this.overlap("paintingL");
            } else if( obj2 === this.bathroomDoor){
                console.log(`${obj1.texture.key} body is overlapping this.bathroomDoor`);
                this.overlap("bathDoor");
            } else if( obj2 === this.motelDoor){
                console.log(`${obj1.texture.key} body is overlapping this.motelDoor`);
                this.overlap("motelDoor");
            } else if( obj2 === this.lockedDresser){
                console.log(`${obj1.texture.key} body is overlapping this.lockedDresser`);
                this.overlap("lockedDresser");
            } else if( obj2 === this.plainDresser){
                console.log(`${obj1.texture.key} body is overlapping this.plainDresser`);
                this.overlap("plainDresser");
            } else if( obj2 === this.keyDresser){
                console.log(`${obj1.texture.key} body is overlapping this.keyDresser`);
                this.overlap("keyDresser");
            } else if( obj2 === this.closet){
                console.log(`${obj1.texture.key} body is overlapping this.closet`);
                this.overlap("closet");
            } else if (obj2 === this.bed) {
                console.log(`${obj1.texture.key} body is overlapping this.bed`);
                this.overlap("bed");
            }
        });

        this.boxBundle = new dialogBoxBundle(this, ['bottom3', ""], ['end', "talk"]);
        //this.boxBundle


    }

    //directions for overlap occurances
    overlap(item){
        if(item === "desk"){
            if(!desk && creatable){
                this.deskInspect = new Button(100, centerY, "SanJoseB", "Inspect", this, () => this.dialogue("desk"));
                desk = true;
            } else if(desk){
                this.deskInspect.show();
            }
            
        } else if (item === "chair1") {
            if(!chair1 && creatable){
                this.chair1Inspect = new Button(100, 500, "SanJoseB", "Inspect", this, () => this.dialogue("chair"));
                chair1 = true;
            } else if(chair1){
                this.chair1Inspect.show();
            }
        } else if (item === "chair2"){
            if(!chair2 && creatable){
                this.chair2Inspect = new Button(625, 100, "SanJoseB", "Inspect", this, () => this.dialogue("chair"));
                chair2 = true;
            } else if(chair2){
                this.chair2Inspect.show();
            }
        } else if (item === "chair3"){
            if(!chair3 && creatable){
                this.chair3Inspect = new Button(1100, 125, "SanJoseB", "Inspect", this, () => this.dialogue("chair"));
                chair3 = true;
            } else if(chair3){
                this.chair3Inspect.show();
            }
        } else if (item === "paintingS"){
            if(!paintingS && creatable){
                this.paintingSInspect = new Button(335, 250, "SanJoseB", "Inspect", this, () => this.dialogue("paintingS"));
                paintingS = true;
            } else if(paintingS){
                this.paintingSInspect.show();
            }
        } else if (item === "paintingL"){
            if(!paintingL && creatable){
                this.paintingLInspect = new Button(325, 620, "SanJoseB", "Inspect", this, () => this.dialogue("paintingL"));
                paintingL = true;
            } else if(paintingL){
                this.paintingLInspect.show();
            }
        } else if (item === "bathDoor"){
            if(!bathroomDoor && creatable){
                this.bathDoorInspect = new Button(200, 200, "SanJoseB", "Inspect", this, () => this.dialogue("bathroomDoor"));
                bathroomDoor = true;
            } else if(bathroomDoor){
                this.bathDoorInspect.show();
            }

        } else if (item === "motelDoor"){
            if(!motelDoor && creatable){
                this.motelDoorInspect = new Button(1100, 250, "SanJoseB", "Inspect", this, () => this.dialogue("motelDoor"));
                motelDoor = true;
            } else if(motelDoor){
                this.motelDoorInspect.show();
            }

        } else if (item === "lockedDresser"){
            if(!lockedDresser && creatable){
                this.lockedDresserInspect = new Button(510, 550, "SanJoseB", "Inspect", this, () => this.dialogue("lockedDresser"));
                lockedDresser = true;
            } else if(lockedDresser){
                this.lockedDresserInspect.show();
            }
        } else if (item === "plainDresser"){
            if(!plainDresser && creatable){
                this.plainDresserInspect = new Button(1150, 450, "SanJoseB", "Inspect", this, () => this.dialogue("plainDresser"));
                plainDresser = true;
            } else if(plainDresser){
                this.plainDresserInspect.show();
            }
        } else if (item === "keyDresser"){
            if(!keyDresser && creatable){
                this.keyDresserInspect = new Button(835, 100, "SanJoseB", "Inspect", this, () => this.dialogue("keyDresser"));
                keyDresser = true;
            } else if(keyDresser){
                this.keyDresserInspect.show();
            }
        } else if (item === "closet"){
            if(!closet && creatable){
                this.closetInspect = new Button(400, 30, "SanJoseB", "Inspect", this, () => this.dialogue("closet"));
                closet = true;
            } else if(closet){
                this.closetInspect.show();
            }
        } else if (item === "bed"){
            if(!bed && creatable){
                this.bedInspect = new Button(730, 500, "SanJoseB", "Inspect", this, () => this.dialogue("bed"));
                bed = true;
            } else if(bed){
                this.bedInspect.show();
            }
        }

        this.time.delayedCall(100, () => {
            if(desk){ this.deskInspect.hide(); }
            if(chair1){ this.chair1Inspect.hide(); }
            if(chair2){ this.chair2Inspect.hide(); }
            if(chair3){ this.chair3Inspect.hide(); }
            if(paintingS){ this.paintingSInspect.hide(); }
            if(paintingL){ this.paintingLInspect.hide(); }
            if(bathroomDoor){ this.bathDoorInspect.hide(); }
            if(motelDoor){ this.motelDoorInspect.hide(); }
            if(lockedDresser){ this.lockedDresserInspect.hide(); }
            if(plainDresser){ this.plainDresserInspect.hide(); }
            if(keyDresser){ this.keyDresserInspect.hide(); }
            if(closet){ this.closetInspect.hide(); }
            if(bed){ this.bedInspect.hide(); }
        });
    }

    //dialogue selections
    dialogue(selection){
        if(selection === "desk"){
            console.log("dialogue");
            shown == true;
            /*if(desk) {*/this.deskInspect.hide()/*};*/
            console.log("this: " + this);
            this.boxBundle = new dialogBoxBundle(this, [
                ['sound', "textScroll"],
                ['bottom3', "A very detailed description of a crow"],
                //['sound', "audio23"],
                ['bottom3', "read in Marion's voice"],
                //['sound', "audio24"],
                ['bottom3', "Anna will add it later tonight"],
                //['sound', "audio25"],
                //['bottom3', "Only on Disney channel"],
                ['hide', "bottom3"],
                ['end', "talk1"]
            ], true);
            
        } else if (selection === "chair"){
            console.log("dialogue chair");
            if(chair1) {this.chair1Inspect.hide()};
            if(chair2) {this.chair2Inspect.hide()};
            if(chair3) {this.chair3Inspect.hide()};
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "It's just a chair..."],
                ['hide', "bottom3"],
                ['end', "talk2"]
            ], true);

        } else if (selection === "paintingS"){
            console.log("dialogue paintingS");
            if(paintingS) {this.paintingSInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Very detailed descritpions of 3 bird paintings"],
                //['sound', "audio23"],
                ['bottom3', "read in Marion's voice"],
                //['sound', "audio24"],
                ['bottom3', "Anna will add it later tonight"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk3"]
            ], true);
        } else if (selection === "paintingL"){
            console.log("dialogue paintingL");
            if(paintingL) {this.paintingLInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "very detailed description of a large bird painting"],
                //['sound', "audio23"],
                ['bottom3', "read in Marion's voice"],
                //['sound', "audio24"],
                ['bottom3', "Anna will add this later"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk4"]
            ], true);
        } else if (selection === "bathroomDoor"){
            console.log("dialogue bath");
            if(bathroomDoor) {this.bathDoorInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "YEaH iM dEf tAkINg a ShOWeR iN ThERe"],
                //['sound', "audio23"],
                ['bottom3', "Marion's last words"],
                //['sound', "audio24"],
                ['bottom3', "Anna will add this later"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk5"]
            ], true);
        } else if (selection === "motelDoor"){
            console.log("dialogue moteldoor");
            if(motelDoor) { this.motelDoorInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Oh look its Norman Bates"],
                //['sound', "audio23"],
                ['bottom3', "Don't worry, its about time for me to take a shower"],
                //['sound', "audio24"],
                ['bottom3', "Anna will add this later"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk6"]
            ], true);
        } else if (selection === "lockedDresser"){
            console.log("locked dresser");
            if(lockedDresser) {this.lockedDresserInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Damn I wish I had a key"],
                //['sound', "audio23"],
                ['bottom3', "And a pre-set key finding dialogue"],
                //['sound', "audio24"],
                ['bottom3', "Oh well."],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk7"]
            ], true);
        } else if (selection === "plainDresser"){
            console.log("plain");
            if(plainDresser) {this.plainDresserInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Hello unsuspecting dresser!"],
                //['sound', "audio23"],
                ['bottom3', "Anna is definitely not going to stash a suggestion of a cover up in here!"],
                //['sound', "audio24"],
                ['bottom3', "No sir."],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk8"]
            ], true);
        } else if (selection === "keyDresser"){
            console.log("key");
            hasKey = true;
            shownK == true;
            this.keyDresserInspect.hide();
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Hello"],
                //['sound', "audio23"],
                ['bottom3', "Key"],
                //['sound', "audio24"],
                ['bottom3', "And goodbye"],
                //['sound', "audio25"],
                //['bottom3', "Only on Disney channel"],
                ['hide', "bottom3"],
                ['end', "talk9"]
            ], true);
        } else if (selection === "closet"){
            console.log("closet party");
            if(closet) {this.closetInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "CLOSET PARTY"],
                //['sound', "audio23"],
                ['bottom3', "let's go bitches"],
                //['sound', "audio24"],
                ['bottom3', "party like its 1960 Psycho"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk7"]
            ], true);
        } else if (selection === "bed"){
            console.log("sleepy time");
            if(bed) {this.bedInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "yeah Anna is definitely not sleep deprived"],
                //['sound', "audio23"],
                ['bottom3', "neither is Shaney"],
                //['sound', "audio24"],
                ['bottom3', "this is def not due tmrw, no way"],
                //['sound', "audio25"],
                //['bottom3', "Only on Cartoon Network"],
                ['hide', "bottom3"],
                ['end', "talk10"]
            ], true);
        }

        //re-enabling inspection selections
        creatable = false;
            this.time.delayedCall(2000, () => {
                console.log("its creatable again")
                creatable = true;
            });
    }

    vlean(){
        
        this.zone.body.touching.none = zoneInspect.destroy();
    }

    /*stop() {
        if (this.physics.collide(this.Marion, this.physics.world.bounds
    }*/
   
    update() {

        //checking collisions
        this.physics.collide(this.Marion, this.Marionint, /*this.stop(), this.topCollide()*/);
        this.physics.collide(this.Marion, this.Mariontop);

        //checking inspect overlaps
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
      
        //setting up normalized movement
        this.direction = new Phaser.Math.Vector2(0);

       //using workaround for known phaser3 fadeIn bug
        //allowing bgMusic to still loop
       var musicConfig = {
            mute: false,
            volume: 2,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
         }

         var sfxConfig = {
            mute: false,
            volume: 0.05,
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
                this.Mfootsteps.play(sfxConfig);
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
                this.Mfootsteps.play(sfxConfig);
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
                this.Mfootsteps.play(sfxConfig);
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
                this.Mfootsteps.play(sfxConfig);
            }
        } else if (Phaser.Input.Keyboard.JustUp(keyD) || Phaser.Input.Keyboard.JustUp(keyRIGHT) && this.direction.y == 0){
            this.Marion.anims.play("idle", true);
            if(this.Mfootsteps.isPlaying) {
                this.Mfootsteps.stop();
            }
        }

        this.direction.normalize();
        this.Marion.setVelocity(150 * this.direction.x, 150 * this.direction.y);

       if(this.boxBundle){
            this.boxBundle.update();
            if(!(this.boxBundle.nextInstruction === 'hide') && (desk == true)){
                this.deskCloseUp.setAlpha(0);
                this.time.delayedCall(100, () => {
                    console.log("delayed call");
                    this.deskInspect.hide();
                    desk = false;
                    });
            } else if (desk == true) {
                this.deskCloseUp.setAlpha(1);
            } else if(!(this.boxBundle.nextInstruction === 'hide') && (keyDresser == true)){
                this.keyDresserCloseUp.setAlpha(0);
                this.time.delayedCall(100, () => {
                    console.log("delayed call");
                    this.keyDresserInspect.hide();
                    keyDresser = false;
                });
            } else if (keyDresser == true) {
                this.keyDresserCloseUp.setAlpha(1);
                this.keyDresser.anims.play("open", true);
            }
            
        }
    }
}
