class Help extends Phaser.Scene {
    constructor() {
        super("helpScene");
    }

    create() {
        //credits text
        this.add.text()
        //#F3B141
        let helpConfig = {
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

        this.add.text(centerX, centerY + 50, "INSERT INSTRUCTIONS HERE", helpConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'INSERT MORE INSTRUCTIONS', helpConfig).setOrigin(0.5);
        //change size and font
        credConfig.fontSize = '50px';
        credConfig.fontFamily = 'Gothic';
        this.add.text(centerX, centerY - 200, 'HELP', credConfig).setOrigin(0.5);

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