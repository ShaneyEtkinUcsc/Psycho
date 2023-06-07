//this class is developed directly from my ARTG 120 game, Quilted
//and was specifically designed by Alex Groff for dialouge functionality
//this is used with his full permission to do so

//this allows for the player to use the created textboxes in dialogBox

class dialogBoxBundle {
    constructor(scene, script, inFocus = false){
        this.scene = scene;
        this.leftBox = new Dialog(scene, 'left1', 20, inFocus);
        this.rightBox = new Dialog(scene, 'right1', 20, inFocus);
        this.leftBox.hide();
        this.rightBox.hide();

        
        this.script = script;
        this.nextInstruction = this.script[0][0];
        this.activeBox = this.leftBox;
        this.scriptIndex = -1;
        this.unusable = false;
        this.lastBoxClicked = false;
        this.paused = false;
        this.pauseTimer;
    }

    create() {
        //reserving keyspace SPACE
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        if (this.unusable || this.paused) return;
        if (this.scriptIndex == -1) this.cycleScript();
        if (this.activeBox.isWaiting && !this.activeBox.isTweening) this.activeBox.createArrowBounce();

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //console.log("space pressed");
            this.activeBox.waitArrow.removeFromDisplayList();
            if (this.activeBox.isTyping) this.activeBox.showTextFlag = true;
                else if(this.activeBox.DialogToDisplayQ.isEmpty && this.nextInstruction !== 'end')this.cycleScript();
                else if (this.activeBox.finished && this.nextInstruction === 'end') {
                    this.lastBoxClicked = true;
                    this.activeBox.isTyping = true;
                    this.unusable = true;
                }
                else this.activeBox.click();
        }

    }

    cycleScript(){
        //console.log(this.activeBox.isTyping + "   " + this.nextInstruction)

        // do nothing if text is not finished from current box or if we reached the end of the script   
        if (this.activeBox.isTyping || this.nextInstruction === 'end') return;

        let currentBox = '', boxChosen = false;
        for (let i = this.scriptIndex + 1; i < this.script.length-1; i++, this.scriptIndex++) {

            if (currentBox != this.nextInstruction && boxChosen) return; // if the next script line is not about giving the current box dialog, then we will come back to it later

            if (this.nextInstruction === 'left1') { // left is our next dialog sequence
                currentBox = 'left1'; 
                boxChosen = true;
                this.activeBox = this.leftBox;
                this.activeBox.addText(this.script[i][1]);
                

            } else if (this.nextInstruction === 'right1') { // right is our next dialog sequence
                currentBox = 'right1'; 
                boxChosen = true;
                this.activeBox = this.rightBox;
                this.activeBox.addText(this.script[i][1])

            } else if (this.nextInstruction === 'sound') { // make noise
                if(i > 0) {
                    this.wasPlaying = this.scene.sound.get(this.script[i - 2][1]);
                    if(this.wasPlaying.isPlaying){
                        //console.log("in inner loop ");
                        this.wasPlaying.stop();
                    }
                }
                this.scene.sound.add(this.script[i][1]).play(audioConfig);

            } else if (this.nextInstruction === 'hide') {  // hide a box
                this.script[i][1] === 'left1' ? this.leftBox.hide() : 
                (this.script[i][1] === 'right1' ? this.rightBox.hide() : false);

            } else if (this.nextInstruction === 'end') {
                return; // our script is DONE!

            } else {
                console.log("UNDEFINED INSTRUCTION ON LINE " + i + ":  " + this.script[i][0])
            }
            
            try {
                this.nextInstruction = this.script[i+1][0];
            } catch {
                console.log("INCORRECT SCRIPT FORMATTING");
            }
        }
    }

    shiftFocus(targetY) {
        if (this.activeBox.isWaiting) {
            this.activeBox.waitArrow.removeFromDisplayList();
        }

        this.leftBox.shift(targetY);
        this.rightBox.shift(targetY);
        this.centerBox.shift(targetY);
        
    }

    get scriptFinished() {
        return (this.lastBoxClicked && ((this.scriptIndex >= this.script.length) || this.nextInstruction === 'end')) ? this.script[this.scriptIndex+1][1] : false;

    }

    remove() {
        this.leftBox.hide()
        this.rightBox.hide()
        this.unusable = true;
    }

}