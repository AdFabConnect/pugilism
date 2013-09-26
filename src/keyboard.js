var Keyboard = function (context)
{
    'use strict';
    
    this.context = context;
    
    return this;
};

Keyboard.prototype.start = function (callback)
{
    'use strict';
    
    this.callback = callback;
    this.bindEvent();

    return;    
};

Keyboard.prototype.bindEvent = function ()
{
    'use strict';
    
    var action,
        self = this;
    
    document.getElementById('pugilismCanvas').addEventListener('keydown',function(e)
    {
        switch(e.keyCode)
        {
            case 81 : 
                action = 'punch';
                break;
            case 69 :
                action = 'kick';
                break;
            case 32 : 
                action = 'protect';
                break;
            case 13 :
                action = 'dodge';
                break;
            default :
                action = '';
                break;
        }
        
        if(action !== '') {
            self.sendAction(action);
        }
    });

    return;
};

Keyboard.prototype.sendAction = function (action)
{
    this.callback.call(this.context, action);
    
    return;
};
