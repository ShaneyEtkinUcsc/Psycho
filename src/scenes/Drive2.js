class Drive2 extends Phaser.Scene {
    constructor() {
        super("drive2Scene");
    }

    create() {
        console.log("in driving2");

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

        //drive scene quick
        this.scene.start("driveScene");
    }
}