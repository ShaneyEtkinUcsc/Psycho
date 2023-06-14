const COLOR_PRIMARY = 0xeb4034;
const COLOR_LIGHT = 0xFFFFFF;
const COLOR_DARK = 0x000000;

//I got this scrolling pause menu prefab from
//https://codepen.io/rexrainbow/pen/YMyBom?editors=0110

class Pause1 extends Phaser.Scene {
    constructor() {
        super({ key: 'pauseScene1' })
    }

    preload() { 
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });      
    }

    create() {
        var data = {
            name: 'Marion',
            objectives: [
               { name: 'A' },
               { name: 'B' },
            ],
            options: [
                { name: 'Help' },
                { name: 'Credits' },
                { name: 'Main Menu' },
               
            ],

        };

        this.print = this.add.text(0, 0, '');
        var scrollablePanel = this.rexUI.add.scrollablePanel({
                x: centerX,
                y: centerY,
                width: 600,
                height: 420,

                scrollMode: 1,

                background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_PRIMARY),

                panel: {
                    child: createPanel(this, data),

                    mask: {
                        padding: 1,
                        // layer: this.add.layer()
                    },
                },

                slider: {
                    track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
                    thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT),
                },
          
                // scroller: true,
                scroller: {
                    // pointerOutRelease: false
                },
          
                mouseWheelScroller: {
                    focus: false,
                    speed: 0.1
                },

                space: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,

                    panel: 10,
                    // slider: { left: 30, right: 30 },
                }
            })
            .layout()
        //.drawBounds(this.add.graphics(), 0xff0000);
        
        var print = this.add.text(0, 0, '');

        // Add children-interactive
        // Solution A:
        scrollablePanel.setChildrenInteractive({
            targets: [
                scrollablePanel.getByName('objectives', true),
                scrollablePanel.getByName('options', true)
            ]
        })
            .on('child.click', function (child) {
                var category = child.getParentSizer().name;
                print.text += `${category}:${child.text}\n`;
            })

        scrollablePanel.getElement('scroller')
            .on('dragstart', function () {
                console.log('scroller.dragstart')
            })
            .on('dragend', function () {
                console.log('scroller.dragend')
            })
    }

    update() {}
}

var createPanel = function (scene, data) {
    var sizer = scene.rexUI.add.sizer({
        orientation: 'x',
        space: { item: 10 }
    })
        .add(
            createHeader(scene, data), // child
            { expand: true }
        )
        .add(
            createTable(scene, data, 'objectives', 1), // child
            { expand: true }
        )
        .add(
            createTable(scene, data, 'options', 3), // child
            { expand: true }
        )
    return sizer;
}

var createHeader = function (scene, data) {
    var title = scene.rexUI.add.label({
        orientation: 'x',
        text: scene.add.text(375, centerY, "Marion is my bitch").setAlign("center"),
        text: scene.add.text(centerX, centerY, "Character").setAlign("center"),
    });
    var header = scene.rexUI.add.label({
        orientation: 'y',
      
        // Can put built-in container as child of panel
        icon: scene.add.container(0, 0, [
            scene.rexUI.add.roundRectangle(0, 0, 100, 100, 5, COLOR_LIGHT)
        ]).setSize(140, 100),
      
        text: scene.add.text(0, 0, data.name),

        space: { icon: 10 }
    });

    return scene.rexUI.add.sizer({
        orientation: 'y',
        space: { left: 40, right: 40, top: 10, bottom: 10, item: 20 }
    })
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, COLOR_LIGHT, 1)
        )
        .add(
            title, // child
            { expand: true, align: 'left' }
        )
        .add(header, // child
            { proportion: 1, expand: true }
        );
};

var createTable = function (scene, data, key, rows) {
    var capKey = key.charAt(0).toUpperCase() + key.slice(1);
    var title = scene.rexUI.add.label({
        orientation: 'x',
        text: scene.add.text(0, 0, capKey),
    });

    var items = data[key];
    var columns = Math.ceil(items.length / rows);
    var table = scene.rexUI.add.gridSizer({
        column: columns,
        row: rows,

        rowProportions: 1,
        space: { column: 10, row: 10 },
        name: key  // Search this name to get table back
    });

    var item, r, c;
    var iconSize = (rows === 1) ? 80 : 90;
    for (var i = 0, cnt = items.length; i < cnt; i++) {
        item = items[i];
        r = i % rows;
        c = (i - r) / rows;
        table.add(
            createIcon(scene, item, iconSize, iconSize),
            c,
            r,
            'top',
            0,
            true
        );
    }

    return scene.rexUI.add.sizer({
        orientation: 'y',
        space: { left: 40, right: 40, top: 40, bottom: 40, item: 20 }
    })
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, COLOR_LIGHT, 1)
        )
        .add(
            title, // child
            0, // proportion
            'left', // align
            0, // paddingConfig
            true // expand
        )
        .add(table, // child
            1, // proportion
            'center', // align
            0, // paddingConfig
            true // expand
        );
}

var createIcon = function (scene, item, iconWidth, iconHeight) {
    var label = scene.rexUI.add.label({
        orientation: 'y',
        icon: scene.rexUI.add.roundRectangle(0, 0, iconWidth, iconHeight, 5, COLOR_LIGHT),
        text: scene.add.text(0, 0, item.name),

        space: { icon: 3 }
    });

    return label;
};

/*create() {

    //i got this scrolling menu from 
  


        let pauseButton = new Button(centerX, centerY, "SanJoseB", "Inspect", this, () => {
            // .resume will start the update loop of the target scene again
            // .stop will shutdown this scene, clear its display list, timers, etc.
            this.scene.resume('introScene').stop()
        })

        // input
        this.pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            // same as above
            this.scene.resume('introScene').stop()
        }
    }*/
//}