var MenuLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        var bRet = false;
        if (this._super()) {
            var bgSprite = cc.Sprite.create("res/background2.jpg");
            bgSprite.setPosition(cc.p(160,240));
            this.addChild(bgSprite);

            /*var logoSprite = cc.Sprite.create("res/logo.png");
            logoSprite.setPosition(cc.p(160,320));
            this.addChild(logoSprite);*/

            var itemStartGame = cc.MenuItemImage.create(
                "res/btn/btnStartGameNor.png",
                "res/btn/btnStartGameDown.png",
                this.menuCallBack,
                this
            );
            itemStartGame.setPosition(cc.p(160, 100));

            var menu = cc.Menu.create(itemStartGame);
            menu.setPosition(cc.p(0, 0));
            this.addChild(menu);

            bRet = true;
        }
        return bRet;
    },
    menuCallBack:function(sender){
        gSharedEngine.playEffect(EFFECT_BUTTON_CHICK);
        
        if(!socketLoaded) return;
        this.socket = io.connect(serveurUrl);
        this.socket.on('connect', this.nodeReady);
    },
    nodeReady: function()
    {
        console.log('ready');
        
        var self = this;
        this.isPlaying = false;
        
        this.socket.emit('waiting', { playerName : player.name });
        this.socket.on('action', function (action)
        {
            console.log(action);
            self.isPlaying = true;
            if(typeof action.end !== "undefined" && action.end !== null){
                self.isPlaying = false;
            }
        });
        
        var nextScene = cc.Scene.create(),
            nextLayer = new LandscapeLayer(),
            battleLayer = new BattleLayer();
            
        nextScene.addChild(nextLayer);
        nextScene.addChild(battleLayer);
        
        battleLayer.init();
        
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(0.4, nextScene));
        //gSharedEngine.setMusicVolume(1);
        //gSharedEngine.setEffectsVolume(1);
        //gSharedEngine.playMusic(MUSIC_VICTORY_BACKGROUND,true);
    }
});

var PugilismScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        //gScoreData.initData();

        //var spriteFrameCache = cc.SpriteFrameCache.getInstance();
        //spriteFrameCache.addSpriteFrames("res/baseResource.plist","res/baseResource.png");

        var layer = new MenuLayer;
        this.addChild(layer);

        //gSharedEngine.setMusicVolume(1);
        //gSharedEngine.setEffectsVolume(1);
        //gSharedEngine.playMusic(MUSIC_BACKGROUND,true);
    }
});