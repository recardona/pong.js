
var Paddle = Class.create(Rectangle, { //Rectangle is the parent
    
    initialize:function($super, inputRef) {
        // Recall:
        //  For any function that we want to call
        //  the parent class, we need to add '$super'
        //  to the beginning of its parameter list.
        
        // Also recall:
        //  The '$super' object is a link to the
        //  parent function, not the parent object.
        $super();
        this.height = 100;
        this.width  = 20;
        this.color  = "0011FF";
        this.isPlayerOne = true;
        this.myInput = inputRef;
    },
    
    
    
    /**
     * Set the position of the paddle to coordinate (x,y) 
     * @param {Number} x the x coordinate to set
     * @param {Number} y the y coordinate to set
     */
    setPosition:function(x,y) {
        this.x = x;
        this.y = y;
    },
    
    
    
    /**
     * @return {Array} the position of the paddle as a
     *                 coordinate map.
     */
    getPosition:function() {
        return {
            'x' : this.x,
            'y' : this.y
        }
    },
    
    
    
    /**
     * @return {Number} the height of this paddle
     */
    getHeight:function() {
        return this.height;
    },
    
    
    
    /**
     * @return {Number} the width of this paddle
     */
    getWidth:function() {
        return this.width;  
    },
    
    
    
    /**
     * Sets whether or not this Paddle belongs to player one.  
     * @param {Boolean} bool the flag to set to indicate that this Paddle belongs to player one 
     */
    setIsPlayerOne:function(bool) {
        this.isPlayerOne = bool;
    },
    
    
    
    /**
     * Checks for player input and adjusts Paddle position 
     * accordingly.
     */
    checkInput:function() {
        //Player 2 input uses the arrow keys
        if(this.isPlayerOne == false) 
        {
            if(this.myInput.isKeyDown(Input.KEY_UP)) {
                if(this.y > 0)
                    this.y -= 10;                    
            }
            
            else if(this.myInput.isKeyDown(Input.KEY_DOWN)) {
                // x,y are taken from the left corner
                if(this.y < game_height - this.height)
                    this.y += 10;
            }
        }
        
        else //Player 1 uses the a/z keys
        {
            if(this.myInput.isKeyDown(65)) { //65 = A key
              
                if(this.y > 0) 
                    this.y -= 10;
            }
            
            else if(this.myInput.isKeyDown(90)) { //90 = Z key
                // x,y are taken from the left corner
                if(this.y < game_height - this.height)
                    this.y += 10;
                
            }
        }
    },
    
    
    
    /**
     * The update function for Paddle.js 
     */
    update:function() {
        this.checkInput();
    }
    
    
});
