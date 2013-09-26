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
    this.bindEvent();

    return this.promise;    
};

Keyboard.prototype.bindEvent = function ()
{
    'use strict';
    
    var action,
        self = this;
    
    document.getElementById('pugilismCanvas').addEventListener('keydown',function(e) {
       switch(e.keyCode) {
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
	 self.promise.resolve(action);
	
    });

    return;
};