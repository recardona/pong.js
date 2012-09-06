var Ball = Class.create(Rectangle, {

    initialize:function($super){
        $super();
        this.horizMaxSpeed = 2;
        this.vertMaxSpeed  = 3;
        this.width  = 20;
        this.height = 20;
        this.color  = "FF0000";
        this.setPosition(200,130);
        this.direction = new Direction();
    },
    
    
    /**
     * @param {Number} x the new x position of this Ball
     * @param {Number} y the new y position of this Ball
     */
    setPosition:function(x,y){
        this.x = x;
        this.y = y;
    },
    
    
    /**
     * @return {Map} the x,y, position of this Ball
     */
    getPosition:function(){
       return {
           'x' : this.x,
           'y' : this.y
       };
    },
    
    
    /**
     * Resets the ball to coordinates 200,130 and picks
     * a random direction of travel.
     */
    resetBall:function(){
        this.setPosition(200,130);
        this.direction.pickDirection();
    },
    
    
    /**
     * Check all the possible things this object can collide with.
     */
    checkCollisions:function(){

        //  check Left Paddle collision
        if(this.y > myGame.leftPaddle.getPosition().y 
            && 
           this.y <= myGame.leftPaddle.getPosition().y + myGame.leftPaddle.getHeight())
        {
            if(this.x == (myGame.leftPaddle.getPosition().x + myGame.leftPaddle.getWidth()))
            {
                this.direction.flipEastWest();
            }
        }
        
        
        //  check Right Paddle collision
        if(this.y >= myGame.rightPaddle.getPosition().y 
            &&
           this.y <= myGame.rightPaddle.getPosition().y + myGame.rightPaddle.getHeight())
        {
            if(this.x == (myGame.rightPaddle.getPosition().x - myGame.rightPaddle.getWidth()))
            {
                this.direction.flipEastWest();
            }
        }
        
        
        //  check Top and Bottom wall collisions
        if(this.y <= 0 || this.y >= game_height - 20) {
            this.direction.flipNorthSouth();
        }
        
        //  check Left and Right wall collisions - points are awarded for these
        if(this.x < 0) {
            //score for Right Player
            myGame.ScoreBoard.scoreRight.incrementScore();
            this.resetBall();
        }
        
        else if(this.x > game_width) {
            //score for Left Player
            myGame.ScoreBoard.scoreLeft.incrementScore();
            this.resetBall();
        }
    },
    
    
    update:function(){
        
        var pos = this.getPosition();
        
        this.setPosition(pos.x - this.horizMaxSpeed * this.direction.getX(), 
                         pos.y - this.vertMaxSpeed * this.direction.getY());
        
        this.checkCollisions();
         
    }
    
});
