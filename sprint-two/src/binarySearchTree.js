var BinarySearchTree = function(value) {
    var obj = Object.create(BinarySearchTree.prototype);
    obj.value = value;
    obj.left = null;
    obj.right = null;
   return obj;
};


//this : binarysearchbaby
BinarySearchTree.prototype.insert = function(value) {
    //create the node
    //insert it in left or right
    //bstBaby = the node usually in this.right
    
    let bstBaby = BinarySearchTree(value); 
    if (value > this.value) {
        //if right node exists, go into the object right node and run insert using the value.
        if (this.right === null) {
            
            this.right = bstBaby;
        }
        this.right.insert(value);

    } else if (value < this.value) {
        // this.left = bstBaby;
        if (this.left === null) {
            
            this.left = bstBaby;
        }
        this.left.insert(value);
    } 
    if(this.contains(value) === true ){
        return 'already has the unique value';
    }

}

BinarySearchTree.prototype.contains = function(target){
    //base case
    
     if ( target === this.value) {
         return true;
     } 
     //recursive case
     if ( this.left || this.right) {
         //if small do recurse on left
         if (this.value > target ) {
             return this.left.contains(target);

         } else if (this.value < target) {
             return this.right.contains(target);
         }
         //i big do recurse on right
         
     }  
     return false;

    //recurseive case
}

//input func
//output do some work
BinarySearchTree.prototype.depthFirstLog = function(func){
    //base case no children
    func(this.value);
    
    if ( !this.left && !this.right) {
        //do nothing
        return;
    }
    
    if (this.left) {
        //recurse
        // func(this.left.value);
        this.left.depthFirstLog(func);
        
    } 
    if (this.right) {
        //recurse
        // func(this.right.value);
        this.right.depthFirstLog(func);
    }
    //recursive case
    // return;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
