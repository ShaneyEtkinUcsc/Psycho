class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    create() {
        console.log("in menu");
        this.scene.start("driveScene");
    }
    
}