//this class is developed directly from my ARTG 120 game, Quilted, 
//and was specifically designed by Alex Groff for dialouge functionality
//this is used with his full permission to do so

class Dialog {

    constructor(scene, side, textSpeed = 30, inFocus = false, bodyText = '') {

        let x, y;
        let textWidth = 300;
        let bubbleType = '';
        let textOffset = 0;
        let arrowOffset = {x: 0, y: 110};

        //side on dialouge boxes?
        if (side == 'right1') {
            x = 950
            y = 195
            bubbleType = "top"
            textOffset = -10
            arrowOffset.x = -10

        } else if (side == 'left1') {
            x = 400
            y = 505
            bubbleType = "bottom";
            textOffset = 20
            arrowOffset.x = 20

        } else {
            console.log('Undifined Side on Dialog Box with :' + bodyText)
        }
        
        this.image = scene.add.sprite(centerX, centerY, bubbleType).setOrigin(0.5);

        //text family config
        let textConfig = {
            fontFamily: 'Gothic',
            fontSize: '40px',
            color: '#eb4034',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //adding text
        if (side == 'right1') {
            this.boxText = scene.add.text(950, 180, "", textConfig).setOrigin(0.5).setDepth(200);
        } else if (side == 'left1') {
            this.boxText = scene.add.text(400, 500, "", textConfig).setOrigin(0.5).setDepth(200);
        }

        //adding waiting arrow
        this.waitArrow = scene.add.sprite(x + arrowOffset.x, y + arrowOffset.y, "triangle").setOrigin(0.5);
        this.waitArrow.setDepth(100).removeFromDisplayList();

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
            //this.side === 'center' ? this.boxText.setPosition(this.x, this.y + 65) : this.boxText.setPosition(this.x + this.textOffset, this.y) 
        }, null, this.scene);
    }

    hide() {
        this.image.removeFromDisplayList();
        this.boxText.removeFromDisplayList().setText('');
        this.waitArrow.removeFromDisplayList();
    }

    show() {
        this.image.addToDisplayList();
        this.boxText.addToDisplayList();
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
