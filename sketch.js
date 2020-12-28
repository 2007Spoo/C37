var database;
var canvas,backgroundimage;

var gamestate = 0;
var playercount;
var allPlayers;

var form,player,game;
var distance=0;
function setup()
{
    createCanvas(400,400);
    database = firebase.database();
    
    game= new Game()
    game.getState();
    game.start();
}
function draw()
{

    if(playercount === 4)
    {
        game.update(1);
    }

    if(gamestate === 1)
    {
        clear();
        game.play();
    }



}
    