var socketLoaded = false;
var socketLoad = function ()
{
    var promise = new Promise();
    
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script"); 

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptSocketUrl);

    head.addEventListener("load", function (event)
    {
        if (event.target.nodeName === "SCRIPT") socketLoaded = true;
        promise.resolve();
    }, true);

    head.appendChild(script);
    
    return promise;
};