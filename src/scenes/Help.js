class Help extends Phaser.Scene {
    constructor() {
        super("helpScene");
    }

    create() {
        this.anims.create({
            key: 'yoyo',
            frames: [
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho2.png"},
                {key: 'buttons', frame: "help_psycho3.png"},
                {key: 'buttons', frame: "help_psycho4.png"},
                {key: 'buttons', frame: "help_psycho5.png"},
                {key: 'buttons', frame: "help_psycho6.png"},
                {key: 'buttons', frame: "help_psycho6.png"},
                {key: 'buttons', frame: "help_psycho6.png"},
                {key: 'buttons', frame: "help_psycho6.png"},
                {key: 'buttons', frame: "help_psycho6.png"}
            ],
            frameRate: 8,
            repeat: -1,
            yoyo: true
        });

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

        helpConfig.fontFamily = 'Gothic';
        this.add.text(centerX, centerY - 100, "For all scenes, 'space' to advance dialogue", helpConfig).setOrigin(0.5);
        helpConfig.fontFamily = 'SanJose';
        this.add.text(centerX, centerY - 25, "Driving Scene:", helpConfig).setOrigin(0.5);
        helpConfig.fontSize = '30px';
        helpConfig.fontFamily = 'Gothic';
        this.add.text(centerX, centerY + 25, "'A' and 'D' or '←' and '→' to move, press 'W' or '↑' to flip the camera", helpConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 75, "Try to remain on the road by staying in the lines", helpConfig).setOrigin(0.5);
        helpConfig.fontSize = '40px';
        helpConfig.fontFamily = 'SanJose';
        this.add.text(centerX, centerY + 125, "Point and Click:", helpConfig).setOrigin(0.5);
        helpConfig.fontSize = '30px';
        helpConfig.fontFamily = 'Gothic';
        this.add.text(centerX, centerY + 175, "Use WASD to move, left click using the mouse to interact with an object", helpConfig).setOrigin(0.5);
        //helpConfig.fontSize = '60px';
        //helpConfig.fontFamily = 'SanJose';
        //helpConfig.color = '#ffffff';
        //this.add.text(centerX, centerY - 200, 'HELP', helpConfig).setOrigin(0.5);
        this.helpButton = this.add.sprite(centerX-0.5, centerY-200, 'buttons', 'help_psycho1.png').play('yoyo');

        this.backButton = this.add.text(centerX - 60, 600, 'BACK', { fill: '#dea918', fontSize: '50px', fontFamily: 'SanJose' }).setInteractive()
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