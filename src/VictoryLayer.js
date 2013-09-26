var VictoryLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        var bRet = false;
        if (this._super()) {
            var bgSprite = cc.Sprite.create("res/bg_victory.jpg");
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
        
        var nextScene = cc.Scene.create();
        var nextLayer = new MenuLayer();
        nextScene.addChild(nextLayer);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(0.4, nextScene));
        gSharedEngine.setMusicVolume(1);
        gSharedEngine.setEffectsVolume(1);
        gSharedEngine.playMusic(MUSIC_BACKGROUND,true);
    }
});