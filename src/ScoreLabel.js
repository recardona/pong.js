var Label = SGF.require('Label');

var ScoreLabel = Class.create(Label, {
   initialize:function($super,font) {
       $super();
       this.width  = 50;
       this.height = 50;
       this.font   = font;
       this.setText("0");
       this.color = "FFFFFF";
       this.size  = 40;
   },
   
   /**
    * Set the position of this ScoreLabel 
    * @param {Object} x the x position to set
    * @param {Object} y the y position to set
    */
   setPosition:function(x,y) {
       this.x = x;
       this.y = y;
   },
   
   
   /**
    * @return {Array} the position of the ScoreLabel
    *         as a coordinate map.
    */
   getPosition:function() {
       return {
           'x' : this.x,
           'y' : this.y
       }
   },
   
   
   /**
    * Increments this ScoreLabel's score by 1.
    */
   incrementScore:function(){
       var num = new Number(this.getText());
       this.setText(""+(num+1));
   },
   
   
   /**
    * @return {String} the Score held in this label.
    */
   getScore:function(){
       return this.getText();
   }
});
