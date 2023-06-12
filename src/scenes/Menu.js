class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        //drive scene quick start
        //this.scene.start("drive2Scene");


        var musicConfig = {
            mute: false,
            volume: 0.1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        let bgMusic = this.sound.get("menuMusic");
        if(!bgMusic.isPlaying) {
            bgMusic.play(musicConfig);
        }
        
        console.log("in menu");

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
            frameRate: 14,
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
            frameRate: 14,
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
            frameRate: 14,
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
            frameRate: 14,
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
            frameRate: 14,
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
            frameRate: 14,
            repeat: 0
        });

        this.titleText = this.add.sprite(400, 50, 'title').setOrigin(0);

        //https://snowbillr.github.io/blog//2018-07-03-buttons-in-phaser-3/
        //this is to make the buttons work :)
        this.playButton = this.add.sprite(centerX/2, centerY, 'buttons', 'play_psycho7.png').setInteractive()
        .on('pointerdown', () => this.nextScene(bgMusic), this)
        .on('pointerover', () => this.playHoverState(), this)
        .on('pointerout', () => this.playRestState(), this);

        this.helpButton = this.add.sprite(centerX+325, centerY+100, 'buttons', 'help_psycho6.png').setInteractive()
        .on('pointerdown', () => this.toHelp(bgMusic), this )
        .on('pointerover', () => this.helpHoverState(), this)
        .on('pointerout', () => this.helpRestState(), this);

        this.creditsButton = this.add.sprite(centerX, centerY+275, 'buttons', 'credits_psycho6.png').setInteractive()
        .on('pointerdown', () => this.toCredits(bgMusic), this)
        .on('pointerover', () => this.credHoverState(), this)
        .on('pointerout', () => this.credRestState(), this);
    }
    
    //PLAY BUTTON FUNCTIONS
    nextScene(music) {
        music.stop();
        this.scene.start('introScene');
    }
    playHoverState() {
        this.playButton.play('playform');
    }
    playRestState() {
        this.playButton.play('playdeform');
    }

    //HELP BUTTON FUNCTIONS
    toHelp(){
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
        this.scene.start('creditsScene');
    }
    credHoverState() {
        this.creditsButton.play('creditsform');
    }
    credRestState() {
        this.creditsButton.play('creditsdeform');
    }
}