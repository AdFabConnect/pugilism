var TAG_NODE = 9960;
var LandscapeLayer = cc.Layer.extend({

    _root:null,
    _target:null,
    _streak:null,


    ctor:function () {
        this._super();

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        // Top Layer
        var logoImage = cc.Sprite.create(s_grg);
        logoImage.setScale(0.5);
        logoImage.setAnchorPoint(cc.p(0, 0));


        // Middle layer: a Tile map atlas
        //var tilemap = cc.TileMapAtlas.create(s_tilesPng, s_levelMapTga, 16, 16);
        var tilemap = cc.TMXTiledMap.create("res/tiles/orthogonal.tmx");
        tilemap.setAnchorPoint(cc.p(0, 0));

        // background layer: another image
        var background = cc.Sprite.create(s_landscape);
        background.setScale(2);
        background.setAnchorPoint(cc.p(0, 0));

        // create a void node, a parent node
        var voidNode = cc.ParallaxNode.create();

        // background image is moved at a ratio of 0.4x, 0.5y
        voidNode.addChild(background, -1, cc.p(0.4, 0.5), cc.p(0,0));

        // tiles are moved at a ratio of 1.0, 1.0y
        ////voidNode.addChild(tilemap, 1, cc.p(1.0, 1.0), cc.p(0, 0));

        // top image is moved at a ratio of 3.0x, 2.5y
        voidNode.addChild(logoImage, 2, cc.p(3.0, 2.5), cc.p(0, 0));
        this.addChild(voidNode, 0, TAG_NODE);

    },

    onTouchesMoved:function (touches, event) {
        var touch = touches[0];
        var node = this.getChildByTag(TAG_NODE);
        var currentPos = node.getPosition();
        node.setPosition(cc.pAdd(currentPos, touch.getDelta() ));
    },

    onMouseDragged:function (event) {
        var node = this.getChildByTag(TAG_NODE);
        var currentPos = node.getPosition();
        node.setPosition(cc.pAdd(currentPos, event.getDelta() ));
    },
});