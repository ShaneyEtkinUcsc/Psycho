class Cutscene3 extends Phaser.Scene {
    constructor() {
        super("cutScene3");
    }
    create() {
        console.log("in cutScene3");

        this.scene.start("splitScream");

    }
}