class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    // preloading all game assets
    preload() {
        
        //loading bar
        let loadingBar = this.add.graphics();
        this.load.on("progress", (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0xFFFFFF, 1);
            loadingBar.fillRect(0, centerY, width * value, 5);
        });
        this.load.on("complete", () => {
            loadingBar.destroy();
        });

        this.load.image("cartemp", "./assets/temps/car_temp.png");
    }
    create() {
        this.temp = this.add.sprite(600, 275, "cartemp").setOrigin(0.5);
        this.temp.setScale(400);
    }

}