#graph
* Implement a graph class, in pseudoclassical style, 

* It is an undirected graph. It does not have to be 'connected'.

* An .addNode() method that takes a new node and adds it to the graph

* A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph

* A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.

* An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph

* A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected

* A .removeEdge() method that removes the connection between two nodes

* A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
What is the time complexity of the above functions?

#set

A set class, in **prototypal** style        

* An .add() method, takes any string and adds it to the set

* A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set

* A .remove() method, takes any string and removes it from the set, if present
What is the time complexity of the above functions?

* Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.

* Note: Until the advanced section, your sets should handle only string values.

* Note: This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?

#hashTable

// Usage:
Function One
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'


// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`

Function Two
var getIndexBelowMaxForKey = function(str, max) 


#binarySearchTree
* trees can only have 0, 1, or 2 children. 
* Remember that trees are recursive data structures 
* * tree's children are themselves trees and can each have 0, 1, or 2 children. 
  
* In a binary search tree,
    *  1 child out of 2 will always less than the node's value 
    *  1 child out of 2 will always be greater than the node's value. 




#A tree 
* Making a family tree.

* .children property, an array containing a number of subtrees
* .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree

* A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
What is the time complexity of the above functions?

For each of the data structures you have implemented, go back and add at least one additional unit test. If possible, try to add a test that will require you improve your implementation in order to make the test pass.