// a solution to handle screen scaling, I got this from:
// https://stackoverflow.com/questions/66191191/how-to-create-a-responsive-game-for-any-screen-size-with-phaser-3

class Preload extends Phaser.Scene {

    handlerScene = null
    sceneStopped = false

    constructor() {
        super ("preload")
    }

    preload() {
        // Images
        this.load.image('logo', 'assets/temps/car_temp.png')   

        this.width = this.game.screenBaseSize.width
        this.height = this.game.screenBaseSize.height

        this.handlerScene = this.scene.get('handler')
        this.handlerScene.sceneRunning = 'preload'
        this.sceneStopped = false
    }

    create() {
        const { width, height } = this
        // CONFIG SCENE         
        this.handlerScene.updateResize(this)
        // CONFIG SCENE  

        // GAME OBJECTS  
        this.add.image(width / 2, height / 2, 'logo').setOrigin(.5)
        // GAME OBJECTS
    }
}