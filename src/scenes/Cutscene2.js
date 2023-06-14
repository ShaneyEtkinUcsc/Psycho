class Cutscene2 extends Phaser.Scene {
    constructor() {
        super("cutScene2");
    }
    create() {
        console.log("in cutScene2");

        //date title animation config
        this.anims.create({
            key: 'date2play',
            frames: [
                {key: 'date2', frame: "Date2ndScene9.png"},
                {key: 'date2', frame: "Date2ndScene8.png"},
                {key: 'date2', frame: "Date2ndScene7.png"},
                {key: 'date2', frame: "Date2ndScene6.png"},
                {key: 'date2', frame: "Date2ndScene5.png"},
                {key: 'date2', frame: "Date2ndScene4.png"},
                {key: 'date2', frame: "Date2ndScene3.png"},
                {key: 'date2', frame: "Date2ndScene2.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene1.png"},
                {key: 'date2', frame: "Date2ndScene2.png"},
                {key: 'date2', frame: "Date2ndScene3.png"},
                {key: 'date2', frame: "Date2ndScene4.png"},
                {key: 'date2', frame: "Date2ndScene5.png"},
                {key: 'date2', frame: "Date2ndScene6.png"},
                {key: 'date2', frame: "Date2ndScene7.png"},
                {key: 'date2', frame: "Date2ndScene8.png"},
                {key: 'date2', frame: "Date2ndScene9.png"}
            ],
            frameRate: 14,
            repeat: 0
        })

        // Marion Death animation config
        this.anims.create({
            key: 'DrivingUp',
            frames: [
                {key: 'batesSign', frame: "BatesMotel1.png"},
                {key: 'batesSign', frame: "BatesMotel2.png"},
                {key: 'batesSign', frame: "BatesMotel3.png"},
                {key: 'batesSign', frame: "BatesMotel4.png"},
                {key: 'batesSign', frame: "BatesMotel5.png"},
                {key: 'batesSign', frame: "BatesMotel6.png"},
                {key: 'batesSign', frame: "BatesMotel7.png"},
                {key: 'batesSign', frame: "BatesMotel8.png"},
            ],
            frameRate: 8,
            repeat: 0
        })

        //audio configs
        var driveConfig = {
            mute: false,
            volume: 0.3,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
            fade: true,
        };

        //Marion stab anim create
        this.Sign = this.add.sprite(centerX, centerY, 'batesSign', 'BatesMotel1.png').play("DrivingUp");
        this.Sign.setScale(4);

        this.Driving = this.sound.add("drivingUp");
        this.Driving.play(driveConfig);

        this.time.delayedCall(400, () => {
            this.Date2 = this.add.sprite(centerX, centerY, 'date2', 'Date2ndScene9.png').play("date2play");
        })

        this.time.delayedCall(7500, () => {
            this.scene.start("motelScene");
        })

    }
}