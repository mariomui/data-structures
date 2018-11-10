var BinarySearchTree = function(value) {
    var obj = Object.create(BinarySearchTree.prototype);
    obj.value = value;
    obj.left = null;
    obj.right = null;
   return obj;
};

// var node = function (value){
//     var nodes = {};
//     nodes.left = null;
//     nodes.right = null;
//     nodes.value = value;
//     return nodes
// }

//this : binarysearchbaby
BinarySearchTree.prototype.insert = function(value) {
    //create the node
    //insert it in left or right

    let bstBaby = node(value); 
    if (value > this.value) {
        this.right = bstBaby;
    } else if (value < this.value) {
        this.left = bstBaby;
    } 


}

BinarySearchTree.prototype.contains = function(){
    return 5;
}

BinarySearchTree.prototype.depthFirstLog = function(){
    return 7;

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
