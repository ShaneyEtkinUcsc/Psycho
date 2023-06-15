class Cutscene3 extends Phaser.Scene {
    constructor() {
        super("cutScene3");
    }
    create() {
        console.log("in cutScene3");

        //date title animation config
        this.anims.create({
            key: 'date3play',
            frames: [
                {key: 'date3', frame: "Date3rdScene9.png"},
                {key: 'date3', frame: "Date3rdScene8.png"},
                {key: 'date3', frame: "Date3rdScene7.png"},
                {key: 'date3', frame: "Date3rdScene6.png"},
                {key: 'date3', frame: "Date3rdScene5.png"},
                {key: 'date3', frame: "Date3rdScene4.png"},
                {key: 'date3', frame: "Date3rdScene3.png"},
                {key: 'date3', frame: "Date3rdScene2.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene1.png"},
                {key: 'date3', frame: "Date3rdScene2.png"},
                {key: 'date3', frame: "Date3rdScene3.png"},
                {key: 'date3', frame: "Date3rdScene4.png"},
                {key: 'date3', frame: "Date3rdScene5.png"},
                {key: 'date3', frame: "Date3rdScene6.png"},
                {key: 'date3', frame: "Date3rdScene7.png"},
                {key: 'date3', frame: "Date3rdScene8.png"},
                {key: 'date3', frame: "Date3rdScene9.png"}
            ],
            frameRate: 14,
            repeat: 0
        })

        // Marion Death animation config
        this.anims.create({
            key: 'mariondying',
            frames: [
                {key: 'mariondeath', frame: "MarionDeathCutscene1.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene2.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene3.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene4.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene5.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene6.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene7.png"},
                {key: 'mariondeath', frame: "MarionDeathCutscene8.png"}
            ],
            frameRate: 8,
            repeat: -1
        })

        //audio configs
        var soundConfig = {
            mute: false,
            volume: 0.3,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
            fade: true,
        };

        //showering background audio
        this.showering = this.sound.add("showering");
        this.showering.play(soundConfig);
        //THE KNIFE music (spooky)
        this.knife = this.sound.add("knife");
        this.knife.play(soundConfig);

        //Marion stab anim create
        this.MarionDeath = this.add.sprite(centerX, centerY, 'mariondeath', 'MarionDeathCutscene1.png').play("mariondying");
        this.MarionDeath.setScale(4);

        //delayed call, create date slide and play scream
        this.time.delayedCall(400, () => {
            this.scream = this.sound.add("scream");
            this.scream.play(soundConfig);

            this.Date3 = this.add.sprite(centerX, centerY, 'date3', 'Date3rdScene9.png').play("date3play");
        })

        this.time.delayedCall(8000, () => {
            this.cameras.main.fadeOut(2000, 0, 0);
            this.time.delayedCall(2000, () => {
                this.scene.start("pardonScene");
            //this.scene.start("splitScream");
            });
        })

    }
    
}