var Tree = function(value) {
  var newTree = {
    value: value,
    children: []
  };
  // newTree.value = value;
  
  _.extend(newTree, treeMethods);
  // your code here
  // newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {

  addChild : function(value) {
  // if (this.value === undefined) {
  //   this.value = value;
  //   debugger;
  // } else {
    // debugger;
  // if( value === 7){
  //   debugger;
  // }
    var treer = Tree(value);
    this.children.push(treer);
  // }
  },

  contains : function(target) {
    var accum = false;

    if(this.children.length > 0 ){
      for(var i =0 ; i < this.children.length; i++){
        if(this.children[i].value === target){
          accum = accum || true;
        } else {
          accum = accum || this.contains.call(this.children[i] , target);

        }
      } 
    }
  return !!accum;
}
  

/*
if children length 0
check if value 

*/
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
