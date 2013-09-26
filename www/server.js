var CONF = require('./config.js');
var io = require('socket.io').listen(CONF.PORT);
var arePlaying = [];
var areWating = [];

function endFight (who, disconnected)
{
    if(areWating.indexOf(who) > -1){
        areWating.splice(areWating.indexOf(who), 1);
    }
    if(arePlaying.indexOf(who.fightAgainst) > -1){
        arePlaying.splice(arePlaying.indexOf(who.fightAgainst), 1);
    }
    if(disconnected){
        if(typeof who.fightAgainst !== "undefined" && who.fightAgainst !== null){
            who.fightAgainst.emit('action', { message : 'Your opponent left the game !', end : true });
            who.fightAgainst = null;
        }
    }
    else{
        var enemy = null;
        if(typeof who.fightAgainst !== "undefined" && who.fightAgainst !== null){
            enemy = who.fightAgainst;
            who.fightAgainst.emit('action', { message : 'Arf you just lose the fight against ' + who.fightAgainst.playerName, end : true });
        }
        if(typeof who !== "undefined" && who !== null){
            who.emit('action', { message : 'Good Game you won over ' + who.fightAgainst.playerName, end : true });
            who.fightAgainst = null;
        }
        if(enemy !== null) enemy.fightAgainst = null;
    }
}

io.sockets.on('connection', function (player)
{
    player.on('waiting', function (data)
    {
        player.playerName = data.playerName;
        if(parseInt(areWating.length) > 0){
            var randomNumber = parseInt(Math.random() * areWating.length);
            player.fightAgainst = areWating[randomNumber];
            areWating[randomNumber].fightAgainst = player;
            areWating.splice(randomNumber, 1);
            player.fightAgainst.emit('action', { message : player.playerName + " as join you! and wanna fight with you !" });
            player.emit('action', { message : player.fightAgainst.playerName + " as join you! and wanna fight with you !" });
        }
        else{
            areWating.push(player);
        }
    });
    
    player.on('action', function (data)
    {
        if(data.type === 'win') {
            endFight(player);
        }
        else if(typeof data.type !== "undefined" && data.type !== null && data.type !== 'replay'){
            player.fightAgainst.emit('action', data);
        }
    });
    
    player.on('disconnect', function ()
    {
        endFight(player, true);
    });
});
