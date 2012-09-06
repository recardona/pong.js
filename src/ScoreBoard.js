var Container = SGF.require('Container');
var Rectangle = SGF.require('Rectangle');
var Label     = SGF.require('Label');

myGame.ScoreBoard = new Container();
myGame.ScoreBoard.height = 400;
myGame.ScoreBoard.width  = 400; 

var font = myGame.getFont('../res/font/game_over.ttf');

//Game label
var title = new Label({
   width: 150,
   height:50  
});

title.x = 140;
title.y = 0;
title.size = 40;
title.font = font;
title.setText("PONG");
title.color = "FFFFFF";


//Divider
var divider = new Rectangle();
divider.width  = 1;
divider.height = 50;
divider.color  = "FFFFFF";
divider.x = 190;
divider.y = 35;


//Score Labels
myGame.ScoreBoard.scoreLeft  = new ScoreLabel(font);
myGame.ScoreBoard.scoreRight = new ScoreLabel(font);

myGame.ScoreBoard.scoreLeft.setPosition(160,40);
myGame.ScoreBoard.scoreRight.setPosition(205,40);

myGame.ScoreBoard.addComponent(title);
myGame.ScoreBoard.addComponent(divider);
myGame.ScoreBoard.addComponent(myGame.ScoreBoard.scoreLeft);
myGame.ScoreBoard.addComponent(myGame.ScoreBoard.scoreRight);






