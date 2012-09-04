var Game  = SGF.require("Game");
var testGame = Game.getInstance();



/**
 * Test of Set.js
 */
function testSet() {
    
    var numberSet = new Set();
    
    numberSet.add(1);
    numberSet.add(1);
    if(numberSet.size() != 1) {
        throw "Size of Set should not change with repeated elements.";
    }
    
    numberSet.remove(1);
    if(numberSet.size() != 0) {
        throw "Size of Set should be reduced when removing element.";
    }
    
    numberSet.add(1);
    numberSet.remove(2);
    if(numberSet.size() != 1) {
        throw "Size of Set should not change when removing non existent elements.";
    }
    numberSet.remove(1);
    
    numberSet.add(12);
    numberSet.add(11);
    var twelve = numberSet.get(0);
    if(!twelve.equals(12)) {
        throw "Index element 0 should be 12";
    }
    
    alert("test for Set.js succeded!");
}


/**
 * Test of LinkedList.js
 */
function testLinkedList() {
    
    var ll = new LinkedList();
    
    ll.add(1);
    if(ll.size() != 1) {
        throw "Linked List should contain one element";
    }
    
    alert("test for LinkedList.js succeded!");    
}


/**
 * Test of Direction.js
 */
function testDirection() {
    var initDir = new Direction();
    var initX = initDir.getX();
    var initY = initDir.getY();
    
    initDir.flipNorthSouth();
    
    var flippedX = initDir.getX();
    var flippedY = initDir.getY();
    
    if(flippedX != initX) {
        throw "Flipping north/south should not affect the X axis";
    }
    
    if(flippedY == initY || flippedY != -initY) {
        throw "Flipped north/south should affect the Y axis";
    }
    
    
    
    
    initDir.pickDirection(); //get a new random direction
    
    
    initX = initDir.getX();
    initY = initDir.getY();
    
    initDir.flipEastWest();
    
    flippedX = initDir.getX();
    flippedY = initDir.getY();
    
    if(flippedY != initY) {
        throw "Flipping east/west should not affect the Y axis";
    } 
    
    if(flippedX == initX || flippedX != -initX) {
        throw "Flipped east/west should affect the X axis";
    }
    
    alert("Test for Direction.js succeded!");
    
}


/**
 * Test of ScoreLabel.js
 */
function testScoreLabel()
{   
    var scoreLabelFont = testGame.getFont('../res/font/game_over.ttf');
    var scoreLabelOne = new ScoreLabel(scoreLabelFont);
    
    var pos = scoreLabelOne.getPosition();
    var posX = pos.x;
    var posY = pos.y;
    
    scoreLabelOne.setPosition(200,130);
    pos = scoreLabelOne.getPosition();
    posX = pos.x;
    posY = pos.y;
    
    if(posX != 200) {
        throw "Set position should change X";
    }
    
    if(posY != 130) {
        throw "Set position should change Y";
    }
    
    scoreLabelScore = scoreLabelOne.getScore();
    var oldScore = new Number(scoreLabelScore);
    
    scoreLabelOne.incrementScore();
    var newScore = new Number(scoreLabelOne.getScore());
    
    if(++oldScore != newScore) {
        throw "Increment score should increase score by 1";
    }
    
    alert("Test for ScoreLabel.js succeded!");

}











