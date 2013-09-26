/**
 * 
 * @param {String} assets
 * @param {String} position
 */
var Player = function (parent, assets, position)
{
    'use strict';
    
    this.promise = null;
    this.sprite = cc.Sprite.create(assets);
    this.screenSize = cc.Director.getInstance().getWinSize();
    this.size = {
        width: 200,
        height: 300
    };
    
    // set x and y from string parameter position
    if(position === 'left') {
        this.sprite.setPosition(cc.p(0, this.screenSize.height - this.size.height));
    }else {
        this.sprite.setPosition(
            cc.p(
                this.screenSize.width - this.size.width,
                this.screenSize.height - this.size.height
            )
        );
    }
    
    return this;
};

Player.prototype.start = function ()
{
    'use strict';
    
    this.promise = new Promise();


    return this.promise;    
};

Player.prototype.bindEvent = function ()
{
    'use strict';
    
    this.promise.resolve('mousedown', 'right');
};