var BattleLayer = cc.Layer.extend({
    isMouseDown:false,
    playerOne:null,
    playerTwo:null,

    init:function () {
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
       
       this.keyboard = new Keyboard();
       
       this.keyboard.start()
        .then(function (type, key)
        {
            
        });
        
        this.playerOne = new Player(this, 'left');
        this.playerTwo = new Player(this, 'right');
       
        return true;
    }
});