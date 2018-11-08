var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  counter = 0;

  list.addToTail = function(value) {
    var node = Node(value);
    //if both head and tail are null refer head and tail to the same node
    if ( list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    
    } else {
      //point the head to the new node
      list.tail.next = node;
      //list.tail is now the node.
      list.tail = node;
    }
    

  };

  list.removeHead = function() {
    var old = list.head.value;
    list.head = list.head.next
    delete list.old;
    return old;
  };

  list.contains = function(target) {
    //if the value of the next node !== null 
      //if obj. value === target return.
      //keep going.
      //obj ++
      var checkNode = list.head;
      while ( checkNode.value ) {
        debugger;
        console.log(checkNode.value);
        if ( checkNode.value === target) {
          return true;
        } else {
          if (checkNode.next) {
          checkNode = checkNode.next;
          } else { 
          return false;
          }
        }
      }
      // return false;
    
  };

  return list;
};

//var llclone = LinkedList();
//llclone.addtotail(value);


/*
 * Complexity: What is the time complexity of the above functions?
 */
