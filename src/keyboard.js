var Keyboard = function ()
{
    'use strict';
    
    this.promise;
    
    return this;
};

Keyboard.prototype.start = function ()
{
    'use strict';
    
    this.promise = new Promise();


    return this.promise;    
};

Keyboard.prototype.bindEvent = function ()
{
    'use strict';
    
    this.promise.resolve('mousedown', 'right')
};