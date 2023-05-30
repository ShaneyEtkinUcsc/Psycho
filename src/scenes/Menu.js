class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        this.load.image("title", "./assets/art/PSYCHO.PNG");
        this.load.atlas("buttons", "./assets/art/buttons.png", "./assets/art/buttons.json");
    }

    create() {
        //console.log("in menu");
        //this.scene.start("driveScene");

        this.menuMusic = this.sound.add("menuMusic");
        
        var musicConfig = {
            mute: false,
            volume: 0.1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
         }

         this.menuMusic.play(musicConfig);

        //ANIMATION CONFIGS
        this.frameNames = this.textures.get('buttons').getFrameNames();
        //Play button animations
        this.anims.create({
            key: 'playdeform',
            frames: [
                {key: 'buttons', frame: "play_psycho1.png"},
                {key: 'buttons', frame: "play_psycho2.png"},
                {key: 'buttons', frame: "play_psycho3.png"},
                {key: 'buttons', frame: "play_psycho4.png"},
                {key: 'buttons', frame: "play_psycho5.png"},
                {key: 'buttons', frame: "play_psycho6.png"},
                {key: 'buttons', frame: "play_psycho7.png"}
            ],
            frameRate: 12,
            repeat: 0
        });
        this.anims.create({
            key: 'playform',
            frames: [
                {key: 'buttons', frame: "play_psycho7.png"},
                {key: 'buttons', frame: "play_psycho6.png"},
                {key: 'buttons', frame: "play_psycho5.png"},
                {key: 'buttons', frame: "play_psycho4.png"},
                {key: 'buttons', frame: "play_psycho3.png"},
                {key: 'buttons', frame: "play_psycho2.png"},
                {key: 'buttons', frame: "play_psycho1.png"}
            ],
            frameRate: 12,
            repeat: 0
        });
        //Help button animations
        this.anims.create({
            key: 'helpdeform',
            frames: [
                {key: 'buttons', frame: "help_psycho1.png"},
                {key: 'buttons', frame: "help_psycho2.png"},
                {key: 'buttons', frame: "help_psycho3.png"},
                {key: 'buttons', frame: "help_psycho4.png"},
                {key: 'buttons', frame: "help_psycho5.png"},
                {key: 'buttons', frame: "help_psycho6.png"}
            ],
            frameRate: 12,
            repeat: 0
        });
        this.anims.create({
            key: 'helpform',
            frames: [
                {key: 'buttons', frame: "help_psycho6.png"},
                {key: 'buttons', frame: "help_psycho5.png"},
                {key: 'buttons', frame: "help_psycho4.png"},
                {key: 'buttons', frame: "help_psycho3.png"},
                {key: 'buttons', frame: "help_psycho2.png"},
                {key: 'buttons', frame: "help_psycho1.png"}
            ],
            frameRate: 12,
            repeat: 0
        });
        //Credits button animations
        this.anims.create({
            key: 'creditsdeform',
            frames: [
                {key: 'buttons', frame: "credits_psycho1.png"},
                {key: 'buttons', frame: "credits_psycho2.png"},
                {key: 'buttons', frame: "credits_psycho3.png"},
                {key: 'buttons', frame: "credits_psycho4.png"},
                {key: 'buttons', frame: "credits_psycho5.png"},
                {key: 'buttons', frame: "credits_psycho6.png"}
            ],
            frameRate: 12,
            repeat: 0
        });
        this.anims.create({
            key: 'creditsform',
            frames: [
                {key: 'buttons', frame: "credits_psycho6.png"},
                {key: 'buttons', frame: "credits_psycho5.png"},
                {key: 'buttons', frame: "credits_psycho4.png"},
                {key: 'buttons', frame: "credits_psycho3.png"},
                {key: 'buttons', frame: "credits_psycho2.png"},
                {key: 'buttons', frame: "credits_psycho1.png"}
            ],
            frameRate: 12,
            repeat: 0
        });

        this.titleText = this.add.sprite(400, 50, 'title').setOrigin(0);

        //https://snowbillr.github.io/blog//2018-07-03-buttons-in-phaser-3/
        this.playButton = this.add.sprite(centerX/2, centerY, 'buttons', 'play_psycho7.png').setInteractive()
        .on('pointerdown', () => this.nextScene() )
        .on('pointerover', () => this.playHoverState() )
        .on('pointerout', () => this.playRestState() );

        this.helpButton = this.add.sprite(centerX+325, centerY+100, 'buttons', 'help_psycho6.png').setInteractive()
        .on('pointerdown', () => this.toHelp() )
        .on('pointerover', () => this.helpHoverState() )
        .on('pointerout', () => this.helpRestState());

        this.creditsButton = this.add.sprite(centerX, centerY+275, 'buttons', 'credits_psycho6.png').setInteractive()
        .on('pointerdown', () => this.toCredits() )
        .on('pointerover', () => this.credHoverState() )
        .on('pointerout', () => this.credRestState() );
    }
    
    //PLAY BUTTON FUNCTIONS
    nextScene() {
        this.menuMusic.stop();
        this.scene.start('driveScene');
    }
    playHoverState() {
        this.playButton.play('playform');
    }
    playRestState() {
        this.playButton.play('playdeform');
    }

    //HELP BUTTON FUNCTIONS
    toHelp(){
        this.menuMusic.stop();
        this.scene.start('helpScene');
    }
    helpHoverState() {
        this.helpButton.play('helpform');
    }
    helpRestState() {
        this.helpButton.play('helpdeform');
    }

    //CREDITS BUTTON FUNCTIONS
    toCredits(){
        this.menuMusic.stop();
        this.scene.start('creditsScene');
    }
    credHoverState() {
        this.creditsButton.play('creditsform');
    }
    credRestState() {
        this.creditsButton.play('creditsdeform');
    }
}