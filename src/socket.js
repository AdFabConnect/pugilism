var socketLoaded = false;
window.onload = function ()
{
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script"); 

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptSocketUrl);

    head.addEventListener("load", function (event)
    {
        if (event.target.nodeName === "SCRIPT") socketLoaded = true;
    }, true);

    head.appendChild(script); 
};