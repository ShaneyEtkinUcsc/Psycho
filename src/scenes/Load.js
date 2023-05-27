
console.log("in load");

class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    // preloading all game assets
    preload() {
        
        //loading bar
        //I'm thinking we have a preload scene for a cooler loading bar at some point
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
     // check for local storage browser support
     if(window.localStorage) {
        console.log("Local storage supported");
    } else {
        console.log("Local storage not supported");
    }

    // go to Menu scene
    this.scene.start("menuScene");
}

}

console.log("reached the bottom of load");