class Motel extends Phaser.Scene {
    constructor() {
        super("motelScene");
    }

    create() {

        // camera fade in effect
        this.cameras.main.fadeIn(2000, 0, 0);

        console.log("in motelScene");

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

        //adding direction text
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

        let endConfig = {
            fontFamily: 'SanJose',
            fontSize: '40px',
            //backgroundColor: '#ffffff',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //adding directional text
        this.tutorial = this.add.text(765, 200, "'W', 'A', 'S' and 'D' or '↑', '←', '↓' and '→' to move", tutorialConfig).setOrigin(0.5).setAlpha(0);
        this.tutorial2 = this.add.text(765, 230, "click on an INSPECT button to look closer at an object", tutorialConfig).setOrigin(0.5).setAlpha(0);
        this.end = this.add.text(centerX, centerY, "Press Space to Continue", endConfig).setOrigin(0.5).setAlpha(0).setDepth(600);
        
        //adding Marion
        this.Marion = this.physics.add.sprite(300, 400, "Marion");
        this.Marion.flipX = true;
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

        //adding Norman
        this.Norman = this.physics.add.sprite(500, 270, "Bates");
        this.Norman.setSize(35, 150)
        this.Norman.setCollideWorldBounds(false);
        this.Norman.setImmovable(true);
        this.Norman.setDebugBodyColor(0xFACADE);
        this.Norman.setScale(1.03);
        this.Norman.setDepth(300);

        //creating Norman's animations
        this.anims.create({
            key: "walkN",
            frames: [
                {key: "Bates", frame: "Bates1.png"},
                {key: "Bates", frame: "Bates2.png"},
                {key: "Bates", frame: "Bates3.png"},
                {key: "Bates", frame: "Bates4.png"},
                {key: "Bates", frame: "Bates5.png"},
                {key: "Bates", frame: "Bates6.png"},
            ],
            frameRate: 6,
            repeat: -1
        });

        //this.Norman.play("walkN");

        //setting up variables for Norman's walking paths
        //i got this behavior pattern from
        //https://codepen.io/samme/pen/pojyPXb
        this.path;
        this.graphics1;
        this.graphics2;
        this.follower;

        this.graphics1 = this.add.graphics({ lineStyle: { color: 0x666666 } });

        this.path = new Phaser.Curves.Path(500, 260);
        this.path.lineTo(1400, 260);
        this.path.draw(this.graphics1);

        this.follower = this.add.follower(this.path, 500, 260, 'Bates')
        this.follower.setAlpha(0);

        //adding UI elements
        this.soundBar = this.add.sprite(1225, 300, "soundBar").setScale(0.25);
        this.key = this.add.sprite(1225, 100, "key").setScale(0.75).setAlpha(0);

        //adding sound bar animations
        this.anims.create({
            key: "soundUp",
            frames: [
                {key: "soundBar", frame: "Soundbar1.png"},
                {key: "soundBar", frame: "Soundbar2.png"},
                {key: "soundBar", frame: "Soundbar3.png"},
                {key: "soundBar", frame: "Soundbar4.png"},
                {key: "soundBar", frame: "Soundbar5.png"},
            ],
            frameRate: 12,
            //repeat: -1,
            //yoyo: true,
        });

        this.anims.create({
            key: "soundDown",
            frames: [
                {key: "soundBar", frame: "Soundbar5.png"},
                {key: "soundBar", frame: "Soundbar4.png"},
                {key: "soundBar", frame: "Soundbar3.png"},
                {key: "soundBar", frame: "Soundbar2.png"},
                {key: "soundBar", frame: "Soundbar1.png"},
            ],
            frameRate: 12,
            //repeat: -1,
            //yoyo: true,
        });

        //adding overlap boxes for room objects
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
        this.largePaintingCover = this.add.sprite(318, 580, "painting2").setRotation(3.1415).setOrigin(0.5).setDepth(400).setScale(1.1);

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

        //adding closeUp objects for popUp menu
        this.deskCloseUp = this.add.sprite(centerX, centerY - 150, "desk1").setRotation(1.5708).setScale(5).setAlpha(0).setDepth(300);
        this.keyDresserCloseUp = this.add.sprite(centerX, centerY - 150, "desk2C").setScale(2.5).setAlpha(0).setDepth(300);
        this.keyDresserCloseUpO = this.add.sprite(centerX, centerY - 150, "desk2O").setScale(2.5).setAlpha(0).setDepth(301);
        this.chairCloseUp = this.add.sprite(centerX, centerY - 100, "chair").setScale(3).setAlpha(0).setDepth(300);
        this.lockedDresserCloseUp = this.add.sprite(centerX, centerY - 100, "desk4").setRotation(3.1415).setScale(5).setAlpha(0).setDepth(300);
        this.plainDresserCloseUp = this.add.sprite(centerX, centerY - 150, "desk3").setRotation(-1.5708).setScale(2.5).setAlpha(0).setDepth(300);
        this.smallP1CloseUp = this.add.sprite(centerX - 300, centerY - 100, "smallPaint1").setScale(7).setAlpha(0).setDepth(300);
        this.smallP2CloseUp = this.add.sprite(centerX, centerY - 100, "smallPaint2").setScale(7).setAlpha(0).setDepth(300);
        this.smallP3CloseUp = this.add.sprite(centerX + 300, centerY - 100, "smallPaint3").setScale(7).setRotation(3.1415).setAlpha(0).setDepth(300);
        this.largePCloseUp = this.add.sprite(centerX, centerY - 100, "painting2").setScale(5).setAlpha(0).setDepth(300);

       
        //enable collisions
        floor.setCollisionByProperty({ collides: true});
        furniture.setCollisionByProperty({ collides: true});
        this.physics.add.collider(this.Marion, floor);
        this.physics.add.collider(this.Marion, furniture);
        
        //enabling overlaps
        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            if(enabled){
                if(obj2 === this.desk){
                    //console.log(`${obj1.texture.key} body is overlapping this.desk`);
                    this.overlap("desk");
                } else if(obj2 === this.chair1){
                    //console.log(`${obj1.texture.key} body is overlapping this.chair1`);
                    this.overlap("chair1");
                } else if( obj2 === this.chair2){
                    //console.log(`${obj1.texture.key} body is overlapping this.chair2`);
                    this.overlap("chair2");
                } else if( obj2 === this.chair3){
                    //console.log(`${obj1.texture.key} body is overlapping this.chair3`);
                    this.overlap("chair3");
                } else if( obj2 === this.paintingSet){
                    //console.log(`${obj1.texture.key} body is overlapping this.paintingSet`);
                    this.overlap("paintingS");
                } else if( obj2 === this.largePainting){
                    //console.log(`${obj1.texture.key} body is overlapping this.largePainting`);
                    this.overlap("paintingL");
                } else if( obj2 === this.bathroomDoor){
                    //console.log(`${obj1.texture.key} body is overlapping this.bathroomDoor`);
                    this.overlap("bathDoor");
                } else if( obj2 === this.motelDoor){
                    //console.log(`${obj1.texture.key} body is overlapping this.motelDoor`);
                    this.overlap("motelDoor");
                } else if( obj2 === this.lockedDresser){
                    //console.log(`${obj1.texture.key} body is overlapping this.lockedDresser`);
                    this.overlap("lockedDresser");
                } else if( obj2 === this.plainDresser){
                    //console.log(`${obj1.texture.key} body is overlapping this.plainDresser`);
                    this.overlap("plainDresser");
                } else if( obj2 === this.keyDresser){
                    //console.log(`${obj1.texture.key} body is overlapping this.keyDresser`);
                    this.overlap("keyDresser");
                } else if( obj2 === this.closet){
                    //console.log(`${obj1.texture.key} body is overlapping this.closet`);
                    this.overlap("closet");
                } else if (obj2 === this.bed) {
                    //console.log(`${obj1.texture.key} body is overlapping this.bed`);
                    this.overlap("bed");
                }
            }
        });

        //adding dialogue box
        this.boxBundle = new dialogBoxBundle(this, ['bottom3', ""], ['end', "talk"]);
        this.boxBundle1 = new dialogBoxBundle(this, [
            //['sound', "audio23"],
            ['bottom3', "Well, the mattress is soft and there's hangers in the closet,"],
            //['sound', "audio23"],
            ['bottom3', "and stationery with the Bates Motel on it in case you want to make your friends back home feel envious."],
            //['sound', "audio24"],
            ['bottom3', "And the uh, over there."],
            //['sound', "audio24"],
            ['bottom3', "The bathroom?"],
            //['sound', "audio24"],
            ['bottom3', "Yeah.  Well, if you want anything just tap on the wall."],
            //['sound', "audio24"],
            ['bottom3', "Thank you Mr. Bates."],
            //['sound', "audio24"],
            ['bottom3', "Norman Bates."],
            //['sound', "pause"],
            ['bottom3', ". . ."],
            //['sound', "audio24"],
            ['bottom3', "You're not going to go out again and drive up to the diner are you?"],
            //['sound', "audio24"],
            ['bottom3', "No."],
            //['sound', "audio24"],
            ['bottom3', "The would you do me a favor, and have dinner with me?"],
            //['sound', "audio24"],
            ['bottom3', "Nothing special, just sandwiches and milk, but I'd like it very much if you'de come up to the house."],
             //['sound', "audio24"],
            ['bottom3', "I don't set a fancy table, but the kitchen is awful homey."],
            //['sound', "audio24"],
            ['bottom3', "I'd like to."],
            //['sound', "audio24"],
            ['bottom3', "Alright, yeah, you get yourself settled and take off your wet shoes, and I'll be back as soon as it's ready."],
            ['hide', "bottom3"],
            ['end', "Intro"]
        ], true);
    }

    //directions for overlap occurances
    overlap(item){
        if(enabled){
            if(item === "desk"){
                if(!desk && creatable){
                    this.deskInspect = new Button(100, centerY - 75, "SanJoseB", "Inspect", this, () => this.dialogue("desk"));
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
                    this.motelDoorInspect = new Button(1200, 250, "SanJoseB", "Inspect", this, () => this.dialogue("motelDoor"));
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
    }

    //dialogue selections
    dialogue(selection){
        inspected += 1;
        this.tutorial.setAlpha(0);
        this.tutorial2.setAlpha(0);
        enabled = false;
        if(selection === "desk"){
            console.log("dialogue");
            shown = true;
            this.deskInspect.hide()
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', ""],
                ['bottom3', "Looks like taxidermy. Hmm... it looks like there's a plaque on the base."],
                //['sound', "audio23"],
                ['bottom3', "It reads: Corvus brachyrhynchos."],
                //['sound', "audio24"],
                ['bottom3', "And it looks like there's a description too."],
                //['sound', "audio25"],
                ['bottom3', "\"Corvus brachyrhynchos, or better known as the American Crow is a familiar bird across the expanse of the United States.\" "],
                //['sound', "audio25"],
                ['bottom3', "\"They are large, all-black birds known for their intelligence.\" "],
                //['sound', "audio25"],
                ['bottom3', "\"Despite their tendency to eat roadkill, carrion is only a very small part of their diet.\" "],
                ['hide', "bottom3"],
                ['end', "talk1"]
            ], true);
            
        } else if (selection === "chair"){
            console.log("dialogue chair");
            if(chair1) {this.chair1Inspect.hide()};
            if(chair2) {this.chair2Inspect.hide()};
            if(chair3) {this.chair3Inspect.hide()};
            shownC = true;
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "It's just a chair..."],
                ['hide', "bottom3"],
                ['end', "talk2"]
            ], true);

        } else if (selection === "paintingS"){
            console.log("dialogue paintingS");
            shownSP = true;
            if(paintingS) {this.paintingSInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "It looks like a set of bird paintings."],
                //['sound', "audio23"],
                ['bottom3', "They have little plaques next to each of them."],
                //['sound', "audio24"],
                ['bottom3', "They read, left to right: \"Gymnogyps californianus, California Condor\", \"Nyctibius grandis, Great Potoo\", \"Cygnus olor, Mute Swan\""],
                ['hide', "bottom3"],
                ['end', "talk3"]
            ], true);
        } else if (selection === "paintingL"){
            console.log("dialogue paintingL");
            shownLP = true;
            if(paintingL) {this.paintingLInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "This is a very elaborate painting; it looks like it has a plaque with it as well."],
                //['sound', "audio23"],
                ['bottom3', "It reads: \"Balaeniceps rex.\""],
                //['sound', "audio24"],
                ['bottom3', "With the following description: \"Balaeniceps rex, widely known as The Shoebill, is native to the deep marshes of Africa.\""],
                //['sound', "audio25"],
                ['bottom3', "\"Referred to frequently as the \"Death Pelican\", these solo birds are patient killers,\""], 
                //['sound', "audio25"],
                ['bottom3', "\"and will often wait motionless for hours before striking their prey.\""], 
                //['sound', "audio25"],
                ['bottom3', "\"When they move into action, they are known to strike with a force strong enough to decapitate prey.\""], 
                ['hide', "bottom3"],
                ['end', "talk4"]
            ], true);
        } else if (selection === "bathroomDoor"){
            console.log("dialogue bath");
            if(bathroomDoor) {this.bathDoorInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "I will shower later, but I can't until I find a hiding place for this money."],
                ['hide', "bottom3"],
                ['end', "talk5"]
            ], true);
        } else if (selection === "motelDoor"){
            console.log("dialogue moteldoor");
            if(motelDoor) { this.motelDoorInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "Strange. It looks like the manager left my door open when he left."],
                //['sound', "audio23"],
                ['bottom3', "I will shut it in a moment."],
                ['hide', "bottom3"],
                ['end', "talk6"]
            ], true);
        } else if (selection === "lockedDresser"){
            console.log("locked dresser");
            if(lockedDresser) {this.lockedDresserInspect.hide(); };
            shownL = true;
            if(hasKey){
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "I wonder if that key I found is to this dresser."],
                //['sound', "audio23"],
                ['bottom3', "*Tries to open*"],
                //['sound', "audio24"],
                ['bottom3', "*Click*"],
                //['sound', "audio25"],
                ['bottom3', "Yes! Looks like I found the key."],
                ['hide', "bottom3"],
                ['end', "talk7.5"]
            ], true);
            exitFlag = true;
            } else {
                this.boxBundle = new dialogBoxBundle(this, [
                    //['sound', "audio22"],
                    ['bottom3', "This looks like a good spot to hide the money."],
                    //['sound', "audio23"],
                    ['bottom3', "*Tries to open*"],
                    //['sound', "audio24"],
                    ['bottom3', "Looks like its locked. Maybe the key is around this room somewhere."],
                    ['hide', "bottom3"],
                    ['end', "talk7"]
                ], true);
            }
        } else if (selection === "plainDresser"){
            console.log("plain");
            shownP = true;
            if(plainDresser) {this.plainDresserInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "It's an empty drawer, except for what looks like a crumpled piece of paper…"],
                //['sound', "audio23"],
                ['bottom3', "Oh wait, this actually looks like a photograph."],
                //['sound', "audio24"],
                ['bottom3', "Huh, seems to be a wedding photo of sorts. They seem like a happy couple."],
                //['sound', "audio25"],
                ['bottom3', "I wonder who would leave something like this behind."],
                ['hide', "bottom3"],
                ['end', "talk8"]
            ], true);
        } else if (selection === "keyDresser"){
            console.log("key");
            hasKey = true;
            shownK = true;
            this.keyDresserInspect.hide();
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "It looks empty…"],
                //['sound', "audio23"],
                ['bottom3', "Wait a second, there's something lodged in the side of this drawer."],
                //['sound', "audio24"],
                ['bottom3', "*Shuffles*"],
                //['sound', "audio25"],
                ['bottom3', "It looks like a key! Maybe I can use this."],
                ['hide', "bottom3"],
                ['end', "talk9"]
            ], true);
        } else if (selection === "closet"){
            console.log("closet party");
            if(closet) {this.closetInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "I suppose I could hide the money in here…"],
                //['sound', "audio23"],
                ['bottom3', "No, it's too open, what if housekeeping finds it."],
                //['sound', "audio24"],
                ['bottom3', "I need to find a better spot."],
                ['hide', "bottom3"],
                ['end', "talk7"]
            ], true);
        } else if (selection === "bed"){
            console.log("sleepy time");
            if(bed) {this.bedInspect.hide(); };
            this.boxBundle = new dialogBoxBundle(this, [
                //['sound', "audio22"],
                ['bottom3', "I am very tired, but I can't rest until I find a good place to hide this money."],
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

    popUp(){
        if(desk && shown){
            this.deskCloseUp.setAlpha(1);
        } else if (keyDresser && shownK){
            this.keyDresserCloseUp.setAlpha(1);
            this.time.delayedCall(100, () => {this.keyDresserCloseUpO.setAlpha(1)});
        } else if ((chair1 || chair2 || chair3) && shownC){
            this.chairCloseUp.setAlpha(1);
        } else if (lockedDresser && shownL){
            this.lockedDresserCloseUp.setAlpha(1);
        } else if (plainDresser && shownP){
            this.plainDresserCloseUp.setAlpha(1);
        } else if (paintingS && shownSP){
            this.smallP1CloseUp.setAlpha(1);
            this.smallP2CloseUp.setAlpha(1);
            this.smallP3CloseUp.setAlpha(1);
        } else if (paintingL && shownLP){
            this.largePCloseUp.setAlpha(1);
        }
    }


    popDown(){
        if(hasKey){
            this.key.setAlpha(1);
        }
        this.deskCloseUp.setAlpha(0);
        this.keyDresserCloseUp.setAlpha(0);
        this.keyDresserCloseUpO.setAlpha(0);
        this.chairCloseUp.setAlpha(0);
        this.lockedDresserCloseUp.setAlpha(0);
        this.plainDresserCloseUp.setAlpha(0);
        this.smallP1CloseUp.setAlpha(0);
        this.smallP2CloseUp.setAlpha(0);
        this.smallP3CloseUp.setAlpha(0);
        this.largePCloseUp.setAlpha(0);
        shown = false;
        shownK = false;
        shownC = false;
        shownL = false;
        shownP = false;
        shownSP = false;
        shownLP = false;
       // }
    }

    NormanDialogueHandler() {
       

        //start of the game dialogue
        if((!enabled) && inspected == 0){
            this.boxBundle1.update();
            if (this.boxBundle1.scriptFinished === "Intro") {
                this.boxBundle1.remove();
                
                
            } 
            if (finishedDialogue == true){
                this.Norman.setAlpha(0);
                this.follower.setAlpha(1);
                this.follower.startFollow({ duration: 5000, });
                this.follower.flipX = true;
                this.follower.anims.play('walkN', true);
                this.time.delayedCall(5000, () => { 
                    this.tutorial.alpha = 1;
                    this.tutorial2.alpha = 1;
                });
            }
        }
            this.enabled = true;
        }/*(if (enabled){*/
    
    update() {

        //starting game
        this.NormanDialogueHandler();

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
       //that prevents bgMusic from looping
       //I learned this from https://www.html5gamedevs.com/topic/13947-audio-not-looping-in-chrome/
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
        if(enabled){
            if((this.input.keyboard.checkDown(keyW) || this.input.keyboard.checkDown(keyUP)) && this.direction.x == 0){
                this.direction.y = -1;
                this.Marion.flipX = false;
                this.Marion.anims.play("walkUp", true);
                if(!this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.play(sfxConfig);
                }
            } else if ((Phaser.Input.Keyboard.JustUp(keyW) || Phaser.Input.Keyboard.JustUp(keyUP)) && this.direction.x == 0){
                this.Marion.anims.play("idle", true); 
                if(this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.stop();
                }
            } else if ((this.input.keyboard.checkDown(keyS) || this.input.keyboard.checkDown(keyDOWN)) && this.direction.x == 0) {
                this.direction.y = 1;
                this.Marion.flipX = true;
                this.Marion.anims.play("walkUp", true);
                if(!this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.play(sfxConfig);
                }
            } else if ((Phaser.Input.Keyboard.JustUp(keyS) || Phaser.Input.Keyboard.JustUp(keyDOWN)) && this.direction.x == 0){
                this.Marion.anims.play("idle", true); 
                if(this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.stop();
                }
            }

            //checking left and right movement
            if((this.input.keyboard.checkDown(keyA) || this.input.keyboard.checkDown(keyLEFT)) && this.direction.y == 0){
                this.direction.x = -1;
                this.Marion.flipX = false;
                this.Marion.anims.play("walkR", true);
                if(!this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.play(sfxConfig);
                }
            } else if ((Phaser.Input.Keyboard.JustUp(keyA) || Phaser.Input.Keyboard.JustUp(keyLEFT)) && this.direction.y == 0){
                this.Marion.anims.play("idle", true);
                if(this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.stop();
                }
            } else if ((this.input.keyboard.checkDown(keyD) || this.input.keyboard.checkDown(keyRIGHT)) && this.direction.y == 0){
                this.direction.x = 1;
                this.Marion.flipX = true;
                this.Marion.anims.play("walkR", true);
                if(!this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.play(sfxConfig);
                }
            } else if ((Phaser.Input.Keyboard.JustUp(keyD) || Phaser.Input.Keyboard.JustUp(keyRIGHT)) && this.direction.y == 0){
                this.Marion.anims.play("idle", true);
                if(this.Mfootsteps.isPlaying) {
                    this.Mfootsteps.stop();
                }
            }

            this.direction.normalize();
            this.Marion.setVelocity(150 * this.direction.x, 150 * this.direction.y);

           

            this.popDown();

    } else if (!enabled) {
        this.popUp();
    }

       if(this.boxBundle){
            this.boxBundle.update();
            if(hasKey && exitFlag){
                enabled = false;
                this.time.delayedCall(5000, () => {this.end.setAlpha(1);})
            }
            if(this.boxBundle.scriptFinished === "talk7.5" && exitFlag){ movingOn = true; };
            if(hasKey && movingOn){
                console.log("exit conditions");
                this.cameras.main.fadeOut(3000, 0, 0);
                bgMusic.stop();
                this.scene.start("cutScene3");
            }
           
        }
    }
}
