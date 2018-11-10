var BinarySearchTree = function(value) {
    var obj = Object.create(searchMethod);
    obj.value = value;
    obj.left = null;
    obj.right = null;
   return obj;
};

var searchMethod = {};
//this : binarysearchbaby
searchMethod.insert = function(value) {
    //create the node
    //insert it in left or right
    debugger
    var bstBaby = BinarySearchTree(value); 
    if (value > this.value) {
        this.right = bstBaby;
    } else {
        this.left = bstBaby;
    }


}

searchMethod.contains = function(){
    return 5;
}

searchMethod.depthFirstLog = function(){
    return 7;

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
