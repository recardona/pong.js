/**
 * Represents a Direction to take on the map.  Is used
 * by the Ball, which is the only game entity which can
 * actually travel. 
 */
var Direction = Class.create({
   
   initialize:function() {
       this.directions = [
        {code:'SE','x':-1,'y':-1},
        {code:'SW','x':1 ,'y':-1},
        {code:'NE','x':-1,'y':1},
        {code:'NW','x':1 ,'y':1}
       ];
      
       var randomDir = Math.floor(Math.random()*this.directions.length);
       this.currentDirection = this.directions[randomDir];
   },
   
   
   /**
    * @return {Direction.Item} a random direction
    */
   pickDirection:function() {
       var num = Math.floor(Math.random() * this.directions.length);
       this.currentDirection = this.directions[num];
   },
   
   
   /**
    * Flips the current direction from the north direction
    * to its corresponding south direction (or vice-versa).
    * NE maps to SE
    * NW maps to SW
    */
   flipNorthSouth:function() {
       var first  = this.currentDirection.code.charAt(0);
       var second = this.currentDirection.code.charAt(1);
       var newFirst = undefined;
       
       if(first == 'N')
           newFirst = 'S';
       
       else
           newFirst = 'N';
           
       this.currentDirection = this.getDirection(newFirst+second);
   },
   
   
   /**
    * Flips the current direction from the east direction
    * to its corresponding west direction (or vice-versa).
    * NE maps to NW
    * SE maps to SW
    */
   flipEastWest:function() {
       var first  = this.currentDirection.code.charAt(0);
       var second = this.currentDirection.code.charAt(1);
       var newSecond = undefined; 
       
       if(second == 'E')
            newSecond = 'W';
       
       else
            newSecond = 'E';
            
       this.currentDirection = this.getDirection(first+newSecond);
   },
   
      
   /**
    * Returns the direction item that corresponds to the
    * parameter code.
    * @param {String} code the code of the direction of
    *        interest
    * @return {Direction.Item} the direction item that
    *         corresponds to the parameter code 
    */
   getDirection:function(code) {
       for(var i = 0; i < this.directions.length; i++) {
           var direction = this.directions[i];
           if(direction.code === code)
              return direction;
       }
   },
   
   
   /**
    * @return {Number} the current x direction
    */
   getX:function() {
       return this.currentDirection.x;
   },
   
   
   /**
    * @return {Number} the current y direction
    */
   getY:function() {
       return this.currentDirection.y;
   }   
});
