class Intro extends Phaser.Scene {
    constructor() {
        super("introScene");
    }

    create() {
        console.log("in introcutscene");

    //adding gameOver siren for driving
    this.sound.add("siren");

     //motel scene quick start
     this.scene.start("cutScene2");

    //reserving keyspace SPACE
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //date title animation config
    this.anims.create({
        key: 'date1play',
        frames: [
            {key: 'date1', frame: "Date1stScene11.png"},
            {key: 'date1', frame: "Date1stScene10.png"},
            {key: 'date1', frame: "Date1stScene9.png"},
            {key: 'date1', frame: "Date1stScene8.png"},
            {key: 'date1', frame: "Date1stScene7.png"},
            {key: 'date1', frame: "Date1stScene6.png"},
            {key: 'date1', frame: "Date1stScene5.png"},
            {key: 'date1', frame: "Date1stScene4.png"},
            {key: 'date1', frame: "Date1stScene3.png"},
            {key: 'date1', frame: "Date1stScene2.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene1.png"},
            {key: 'date1', frame: "Date1stScene2.png"},
            {key: 'date1', frame: "Date1stScene3.png"},
            {key: 'date1', frame: "Date1stScene4.png"},
            {key: 'date1', frame: "Date1stScene5.png"},
            {key: 'date1', frame: "Date1stScene6.png"},
            {key: 'date1', frame: "Date1stScene7.png"},
            {key: 'date1', frame: "Date1stScene8.png"},
            {key: 'date1', frame: "Date1stScene9.png"},
            {key: 'date1', frame: "Date1stScene10.png"},
            {key: 'date1', frame: "Date1stScene11.png"}
        ],
        frameRate: 14,
        repeat: 0
    })

    // create the dialog boxes
    this.boxBundle = new dialogBoxBundle(this, [
        ['sound', "audio1"],
        ['right1', "Hold it there!"],
        ['sound', "audio2"],
        ['right1', "In quite a hurry."],
        ['sound', "audio3"],
        ['left1', "Yes, I didn't intend to sleep so long."],
        ['sound', "audio4"],
        ['left1', "I almost had an accident last night,"],
        ['sound', "audio5"],
        ['left1', "from sleepiness, so I decided to pull over."],
        ['sound', "audio6"],
        ['right1', "You slept here all night?"],
        ['sound', "audio7"],
        ['left1', "Yes, as I said, I couldn't keep my eyes open."],
        ['sound', "audio8"],
        ['right1', "There are plenty of motels in this area."],
        ['sound', "audio9"],
        ['right1', "I mean you should have -"],
        ['sound', "audio10"],
        ['right1', "I mean just to be safe."],
        ['sound', "audio11"],
        ['left1', "I didn't intend to sleep all night. I just pulled over. Have I broken any laws?"],
        ['sound', "audio12"],
        ['right1', "No ma'am."],
        ['sound', "audio13"],
        ['left1', "Then I'm free to go."],
        ['sound', "audio14"],
        ['right1', "Is anything wrong?"],
        ['sound', "audio15"],
        ['left1', "Of course not. Am I acting as if there is something wrong?"],
        ['sound', "audio16"],
        ['right1', "Frankly yes."],
        ['sound', "audio17"],
        ['left1', "Please, I'd like to go."],
        ['sound', "audio18"],
        ['right1', "Well, is there?"],
        ['sound', "audio19"],
        ['left1', "Is there what?"],
        ['sound', "pause"],
        ['right1', ". . ."],
        ['sound', "audio20"],
        ['left1', "I've told you there is nothing wrong, except that I'm in a hurry and you are taking up my time."],
        ['sound', "audio21"],
        ['left1', "Good day officer."],
        ['end', "Chat"]
    ], true)

    //audio configs
    var walkConfig = {
        mute: false,
        volume: 0.5,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0,
        fade: true,
    };

    this.time.delayedCall(1000, () => {

    this.Date1 = this.add.sprite(centerX, centerY, 'date1', 'Date1stScene11.png').play("date1play");
    this.knock = this.sound.add("knock");
    this.knock.play(walkConfig);

    });

    }

    driveAway(){
        if(!musicPlaying){
            var music = this.sound.add("driveAway");
            music.on('complete', () => {
                this.scene.start("drive2Scene");
            });
            music.play(audioConfig);
            musicPlaying = true;
        }
    }

    update() { 
     
        this.time.delayedCall(8300, () => {
        // dialog box update
        this.boxBundle.update();
        if (this.boxBundle.scriptFinished === "Chat") {
            //this.boxBundle.remove();
            this.driveAway();
        }
        });

    }
}