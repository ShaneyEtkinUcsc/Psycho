class Pardon extends Phaser.Scene {
    constructor() {
        super("pardonScene");
    }

    create () {

        //reserving keyspaces
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        let credConfig = {
            fontFamily: 'Gothic',
            fontSize: '35px',
            //backgroundColor: '#ffffff',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //ending screen text
        this.add.image(centerX, centerY, "tempEnd");
        credConfig.color = '#eb4034';
        this.add.text(centerX + 375, centerY + 100, 'Or at least Marion did...', credConfig).setOrigin(0.5);
        credConfig.color = '#ffffff';
        this.add.text(300, centerY + 300, "Thanks for playing!", credConfig).setOrigin(0.5);
        this.add.text(950, centerY + 300, 'Press SPACE to return', credConfig).setOrigin(0.5);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
                this.cameras.main.fadeOut(2000, 0, 0);
                this.sound.stopAll();
                this.time.delayedCall(2000, () => {
                    this.scene.start("menuScene");
                });

        }

    }

}
