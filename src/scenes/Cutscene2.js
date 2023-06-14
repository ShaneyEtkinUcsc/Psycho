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

        this.Date2 = this.add.sprite(centerX, centerY, 'date2', 'Date2ndScene9.png').play("date2play");

        this.time.delayedCall(7500, () => {
            this.scene.start("motelScene");
        })

    }
}