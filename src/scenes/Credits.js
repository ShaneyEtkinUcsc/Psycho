class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        //#F3B141
        let credConfig = {
            fontFamily: 'SanJose',
            fontSize: '40px',
            //backgroundColor: '#ffffff',
            color: '#eb4034',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(centerX, centerY + 50, "Adapted from Alfred Hitchcock's Psycho", credConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Game by Anna Schultz and Shaney Etkin', credConfig).setOrigin(0.5);
        //change size and font
        credConfig.fontSize = '50px';
        credConfig.fontFamily = 'Gothic';
        this.add.text(centerX, centerY - 200, 'CREDITS', credConfig).setOrigin(0.5);

        this.backButton = this.add.text(centerX - 60, 500, 'BACK', { fill: '#dea918', fontSize: '50px' }).setInteractive()
        .on('pointerdown', () => this.returnToMenu() )
        .on('pointerover', () => this.hoverState() )
        .on('pointerout', () => this.restState() );
    }

    returnToMenu() {
        this.scene.start("menuScene");
    }

    hoverState() {
        this.backButton.setStyle({ fill: '#eb4034'});
    }

    restState() {
        this.backButton.setStyle({ fill: '#dea918'})
    }
}