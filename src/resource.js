
var gSpriteFrameCache = cc.SpriteFrameCache.getInstance();

var gSharedEngine = cc.AudioEngine.getInstance();

var s_playerOne = "res/player-blue.png",
s_playerTwo = "res/player-purple.png";

var MUSIC_BACKGROUND  = "audio/pe.mp3";
var MUSIC_VICTORY_BACKGROUND = "audio/black.mp3";
var EFFECT_BUTTON_CHICK  = "audio/effect_buttonClick.ogg";

var s_grg = "res/landscape/ratchet.png";
var s_landscape = "res/landscape/landscape.png";
var s_fixedOrthoTest2Png = "res/tiles/fixed-ortho-test2.png";


var g_resources = [

   {src:s_playerOne},
   {src:s_playerTwo},
    
   {src:"res/background2.jpg"},
   {src:"res/bg_victory.jpg"},
   {src:"res/logo.png"},

   {src:"res/btn/btnStartGameDown.png"},
   {src:"res/btn/btnStartGameNor.png"},
   
   {src:s_grg},
   {src:s_landscape},
   {src:"res/tiles/orthogonal.tmx"},
   {src:s_fixedOrthoTest2Png},

   {src:MUSIC_BACKGROUND},
   {src:MUSIC_VICTORY_BACKGROUND},
   {src:EFFECT_BUTTON_CHICK}
];
