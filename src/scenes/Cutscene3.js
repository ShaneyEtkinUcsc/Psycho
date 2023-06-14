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

        this.MarionDeath = this.add.sprite(centerX, centerY, 'mariondeath', 'MarionDeathCutscene1.png').play("mariondying");
        this.MarionDeath.setScale(4);

        this.time.delayedCall(400, () => {
            this.Date2 = this.add.sprite(centerX, centerY, 'date2', 'Date2ndScene9.png').play("date2play");
        })

        this.time.delayedCall(8000, () => {
            this.scene.start("splitScream");
        })

    }
}