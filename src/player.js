var Player = function(parent, name, rect, asset)
{
    'use strict';
    
    this.promise = null;
    this.name = name;
    this.rect = rect;
    this.parent = parent;
    this.asset = asset;
    this.paused = true;
    
    this.isPlaying = 0;
    this.actions = {
        kick: {
            delay: 100
        },
        punch: {
            delay: 100
        },
        protect: {
            delay: 100
        },
        dodge: {
            delay: 10
        }
    };
    
    return this;
};

Player.prototype.start = function()
{
    'use strict';

    this.sprite = cc.Sprite.create(this.asset, cc.rect(0, 0, this.rect.width, this.rect.height));
    this.sprite.setPosition(cc.p(this.rect.x, this.rect.y));
    this.parent.addChild(this.sprite);
    
    cc.Director.getInstance().getScheduler().scheduleUpdateForTarget(this, 1, this.isRunning);
    
    return;
};

Player.prototype.doAction = function(action)
{
    'use strict';
    
    if(typeof this.actions[action] === 'object' && this.isPlaying === 0) {
        this.isPlaying = this.actions[action].delay + 1;
    }
    
    return (this.isPlaying > 0) ? true : false;
};

Player.prototype.update = function(time)
{
    'use strict';
    
    if(this.isPlaying === 0) {
        this.isRunning = false;
    }else {
        this.isPlaying--;
        console.log('is playing : ' + this.isPlaying);
    }
    
    return;
};