class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        this.anims.create({
            key: 'credyoyo',
            frames: [
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho2.png"},
                {key: 'buttons', frame: "credits_psycho3.png"},
                {key: 'buttons', frame: "credits_psycho4.png"},
                {key: 'buttons', frame: "credits_psycho5.png"},
                {key: 'buttons', frame: "credits_psycho6.png"},
                {key: 'buttons', frame: "credits_psycho6.png"},
                {key: 'buttons', frame: "credits_psycho6.png"},
                {key: 'buttons', frame: "credits_psycho6.png"},
                {key: 'buttons', frame: "credits_psycho6.png"}
            ],
            frameRate: 8,
            repeat: -1,
            yoyo: true
        });

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

        this.add.text(centerX, centerY - 50, 'Game by Anna Schultz and Shaney Etkin', credConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, "Adapted from Alfred Hitchcock's Psycho", credConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 50, "Music based on score by Bernard Herrmann", credConfig).setOrigin(0.5);

        this.creditsButton = this.add.sprite(centerX-3, centerY-200, 'buttons', 'help_psycho1.png').play('credyoyo');

        this.backButton = this.add.text(centerX - 53, 500, 'BACK', { fill: '#dea918', fontSize: '50px', fontFamily: 'SanJose' }).setInteractive()
        .on('pointerdown', () => this.returnToMenu(), this)
        .on('pointerover', () => this.hoverState(), this)
        .on('pointerout', () => this.restState(), this);
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