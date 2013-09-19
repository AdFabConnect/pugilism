var PugilismScene = cc.Scene.extend({
    
    onEnter:function () {
        this._super();
        var layer = new BattleLayer();
        layer.init();
        this.addChild(layer);
    }
    
});