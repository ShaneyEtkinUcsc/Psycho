// I got this button class from:
// https://webtips.dev/webtips/phaser/interactive-buttons-in-phaser3

class Button {
    constructor(x, y, font, label, scene, callback) {
        const button_back = scene.add.image();
        this.button = scene.add.bitmapText(x, y, font, label)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .setDepth(200)
            .on('pointerdown', () => callback())
            // .on('pointerover', () => button.setStyle({ fill: '#c92870' }))
            // .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
    }
    hide() {
        this.button.removeFromDisplayList();
    }
    show() {
        if(creatable){
            this.button.addToDisplayList();
        } 
    }
}