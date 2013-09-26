var BattleLayer = cc.Layer.extend({
    isMouseDown:false,
    myPlayer:null,
    remotePlayer:null,
    playerBounds: {
        width: 200,
        height: 300
    },
    isPlaying:false,

    init:function ()
    {
        'use strict';
        
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.Director.getInstance().getWinSize();

        /*
        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = cc.MenuItemImage.create(
            "res/CloseNormal.png",
            "res/CloseSelected.png",
            function () {
                history.go(-1);
            },this);
        closeItem.setAnchorPoint(cc.p(0.5, 0.5));

        var menu = cc.Menu.create(closeItem);
        menu.setPosition(cc.PointZero());
        this.addChild(menu, 1);
        closeItem.setPosition(cc.p(size.width - 20, 20));
        */
        
        this.keyboard = new Keyboard(this);
        
        this.screenSize = cc.Director.getInstance().getWinSize();
        
        this.myPlayer = new Player(
            this,
            'test',
            {
                x: this.playerBounds.width / 2,
                y: this.playerBounds.height / 2,
                width: this.playerBounds.width,
                height: this.playerBounds.height
            },
            'res/player-blue.png'
        );
        
        this.nodeEvents({type: 'join', playerName: 'test'});
        
        this.ready();
        
        return true;
    },
    
    ready: function(action)
    {
        'use strict';
        
        this.isPlaying = true;
        this.myPlayer.start();
        this.remotePlayer.start();
       
        this.keyboard.start(this.keyboarEvents);
        
        return;
    },
    
    keyboarEvents: function(action)
    {
        'use strict';
        
        if(this.isPlaying) {
            this.myPlayer.doAction(action);
        }
        
        return;
    },
    
    nodeEvents: function(action)
    {
        'use strict';
        
        if(action.type === 'join') {
            this.remotePlayer = new Player(
                this,
                action.playerName,
                {
                    x: this.screenSize.width - (this.playerBounds.width / 2),
                    y: this.playerBounds.height / 2,
                    width: this.playerBounds.width,
                    height: this.playerBounds.height
                },
                'res/player-purple.png'
            );
        }else if(action.type === 'action' && action.name === this.remotePlayer.name && this.isPlaying) {
            this.remotePlayer.doAction(action);
        }
        
        return;
    },
    
    destroy: function ()
    {
        
    }
});