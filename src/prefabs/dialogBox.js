//this class is developed directly from my ARTG 120 game, Quilted, 
//and the base class was specifically designed by Alex Groff for dialouge functionality
//this is used with his full permission to do so, I have overhauled it for this game

class Dialog {

    constructor(scene, side, textSpeed = 30, inFocus = false, bodyText = '') {

        let x, y;
        let textWidth = 20;
        let bubbleType = '';
        let textOffset = 0;
        let arrowOffset = {x: 0, y: 110};

        //creating dialouge box preferences
        if (side == 'right1') {
            x = 850;
            y = 125;
            bubbleType = "top";
            textOffset = 2;
            arrowOffset.x = 2;
            this.image = scene.add.sprite(centerX - 200, centerY, "top").setOrigin(0.5).setScale(1.25).setDepth(2000);

        } else if (side == 'left1') {
            x = 415;
            y = 500;
            bubbleType = "bottom";
            textOffset = 2;
            arrowOffset.x = 2;
            this.image = scene.add.sprite(centerX + 250, centerY - 180, "bottom").setOrigin(0.5).setScale(1.45).setDepth(2000);

        }else if (side == 'bottom2') {
            x = 0;
            y = 600;
            bubbleType = "txtbottom";
            textOffset = 2;
            arrowOffset.x = 1100;
            arrowOffset.y = 25;
            this.image = scene.add.sprite(0, 520, "txtbottom").setOrigin(0).setAlpha(0.5).setDepth(2000);

        }else if (side == 'bottom3'){
            x = 0;
            y = 600;
            bubbleType = "bottomtxt";
            textOffset = 2;
            arrowOffset.x = 1100;
            arrowOffset.y = 200;
            this.image = scene.add.sprite(0, 480, "bottomtxt").setOrigin(0).setDepth(2000);

        } else {
            console.log('Undefined Side on Dialog Box with :' + bodyText)
        }

        //text family config
        let textConfig = {
            fontFamily: 'Gothic',
            fontSize: '40px',
            color: '#eb4034',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            wordWrap: { 
                width: 740, 
                useAdvancedWrap: true 
            },
            fixedWidth: 0
        }

        //adding text
        if (side == 'right1') {
            this.boxText = scene.add.text(850, 125, "", textConfig).setOrigin(0.5).setDepth(2000);
        } else if (side == 'left1') {
            this.boxText = scene.add.text(415, 500, "", textConfig).setOrigin(0.5).setDepth(2000);
        } else if (side == 'bottom2'){
            this.boxText = scene.add.text(centerX, 650, "", textConfig).setOrigin(0.5).setDepth(2000);
        } else if (side == 'bottom3'){
            this.boxText = scene.add.text(centerX, 630, "", textConfig).setOrigin(0.5).setDepth(2000);
        }

        //adding waiting arrow
        this.waitArrow = scene.add.sprite(x + arrowOffset.x, y + arrowOffset.y, "triangle").setOrigin(0.5);
        this.waitArrow.setDepth(2005).removeFromDisplayList();

        this.x = x;
        this.y = y;
        this.arrowOffset = arrowOffset;
        this.bounceTween = null;
        this.isTweening = false;
        this.textWidth = textWidth;
        this.scene = scene;
        this.textSpeed = textSpeed;
        this.textOffset = textOffset;
        this.isWaiting = false;
        this.isTyping = false;
        this.side = side;
        this.DialogToDisplayQ = new Queue();
        this.text = '';
        this.showTextFlag = false;

    }

    addText(body, speed = this.textSpeed) {
        this.show()
        if (this.isTyping) {
            this.DialogToDisplayQ.enqueue(body)
        } else {
            this.displaySlowText(body, speed)
        }
    }

    displaySlowText(fullText, textSpeeeeeed = this.textSpeed) {
        this.isTyping = true;
        this.isWaiting = false;
        this.text = fullText;
        this.displaySlowTextR(fullText, textSpeeeeeed, 0);
        let timeToType = fullText.length * textSpeeeeeed * 2;
        this.typingTimer = this.scene.time.delayedCall(timeToType, () => {/*console.log('done writing')*/; this.isWaiting = true; this.isTyping = false}, null, this.scene);
              
    }
    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex > fullText.length) return;
        this.boxText.setText(fullText.slice(0, textIndex))

        if (this.showTextFlag) {
            this.showTextFlag = false;
            this.boxText.setText(this.text);
            this.typingTimer.hasDispatched = true;
                console.log('done writing'); this.isWaiting = true; this.isTyping = false;
            return;
        }

        this.scene.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowTextR(fullText, textSpeeeeeed, textIndex+1)
        }, null, this.scene);
    }

    hide() {
        //console.log("hide called");
        this.image.removeFromDisplayList();
        this.boxText.removeFromDisplayList().setText('');
        this.waitArrow.removeFromDisplayList();
        this.waitArrow.alpha = 0;
    }

    show() {
        this.image.addToDisplayList();
        this.boxText.addToDisplayList();
        this.waitArrow.removeFromDisplayList();
        this.waitArrow.alpha = 1;
    }

    // when a box is clicked
    click() {
        if (!this.isTyping){
            if (this.DialogToDisplayQ.isEmpty) this.hide()
            else {
                this.displaySlowText(this.DialogToDisplayQ.dequeue())
            }
        } else {
            this.showTextFlag = true;
        }
    }

    createArrowBounce() {
        this.waitArrow.addToDisplayList()
        if (this.bounceTween === null)
        this.bounceTween = this.scene.tweens.add({
            targets: this.waitArrow,
            y: (this.y + this.arrowOffset.y + 25),
            ease: 'Quad.Out',
            duration: 1000,
            yoyo: true,
            repeat: 10000000
        });
    }
    
    shift(target) {
        if(this.isTweening) return;
        this.isTweening = true;

        if (this.bounceTween != null) {
            this.bounceTween.complete();
            this.bounceTween = null;
        }

        this.scene.time.delayedCall(1600, () => {
            this.isTweening = false;
        }, null, this.scene);

        if (target >= game.config.height * 5/6) target = game.config.height * 5/6;
        this.scene.tweens.add({
            targets: [this.boxText, this.image],
            y: target,
            ease: 'Quad.InOut',
            duration: 1500,
        });

        this.scene.tweens.add({
            targets: this.waitArrow,
            y: (target + 150),
            ease: 'Quad.InOut',
            duration: 1500,
        });

        this.y = target
    }

    get finished (){
        return this.DialogToDisplayQ.isEmpty && !this.isTyping
    }

    
}

class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
}
