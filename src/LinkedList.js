/**
 * A simple LinkedListNode with a value and a pointer to its child.
 */
var LinkedListNode = Class.create({
   
    /**
     * Creates a LinkedListNode with the give parameter value.
     * This node is not connected to any other node. 
     * @param {Object} val the value of this node.
     */
    initialize:function(val) {
        this.value = val;
        this.next  = null;
    },
    
    /**
     * Adds a child node to this node.
     * @param {Object} llnode the child node to add
     */
    addChild:function(llnode) {
        this.next = llnode;
    },
    
    /**
     * @return {Object} the child of this node.
     */
    getChild:function() {
        return this.next;
    }
});




/**
 * A simple LinkedList made up of LinkedListNodes.
 */
var LinkedList = Class.create({
   
   /**
    * Creates a linked list with a null root node.
    * Note, the null root does not count towards
    * the LinkedList's size.
    */
   initialize:function() {
       this.root = new LinkedListNode(null);
       this.len = 0;
   },
   
   
   /**
    * Adds an element to this list by instantiating a 
    * LinkedListNode at the tail with the parameter value. 
    * @param {Object} val the value of the new tail LinkedListNode 
    */
   add:function(val) {
       node = this.root;
       while(node.getChild() != null) {
           node = node.getChild();
       }
       node.addChild(new LinkedListNode(val));
       this.len++;
   },
   
   
   /**
    * @return {Number} the size of the linked list.
    */
   size:function() {
       return this.len;
   }
   
});
