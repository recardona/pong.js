/**
 * A Set is a collection that has no duplicate values.
 */
var Set = Class.create({
   
   initialize:function() {
       this.rawArray = [];
   },
   
   
    /**
     * Add an element only if it doesn't exist.
     * @param {Object} the element to add
     */
    add:function(elem) {
        if(this.contains(elem) == undefined){
            this.rawArray.push(elem);
        }
    },
    
    
    /**
     * Returns the element at the given index. 
     * @param {Number} index the index of the desired element
     * @return {Object} the element at the index
     */
    get:function(index) {
        return this.rawArray[index];
    },
    
    
    /**
     * Remove an element only if it exists in the set. 
     * @param {Object} elem the element to remove.
     */
    remove:function(elem) {
        var index = this.contains(elem);
        if(index != undefined) {
            this.rawArray.splice(index,1);
        }
    },
    
    
    /**
     * Returns the index of the element if it exists in the set.
     * Otherwise, returns "undefined". 
     * @param {Object} elem the element to search for
     * @return {Number} the index of the element or undefined if
     *          it does not exist in the set
     */
    contains:function(elem) {
        for(var i = 0; i < this.rawArray.length; i++) {
            var elem2 = this.rawArray[i];
            if(elem.equals(elem2))
                return i;
        }
        return undefined;
    },
    
    
    /**
     * @return {Number} the length of this Set.
     */
    size:function() {
        return this.rawArray.length;
    }    
});


/**
 * Extends the Number to include an equals function, which
 * tests the equality of 'this' against a parameter.
 * @param {Object} num
 */
Number.prototype.equals = function(num) {
    return this == num;
}
