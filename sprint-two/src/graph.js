

// Instantiate a new graph
var Graph = function() {
    this.list= {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.list[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.list.hasOwnProperty(node)
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    //find all keys that are connected to node
    // iterate through those keys in list 
    //remove edges in those key nodes that are connected to the node that is being removed
    // debugger
    var edgeKey = [];
    var self = this;
    for(var key in this.list[node]){
        edgeKey.push(key);
    }
    delete this.list[node];
    edgeKey.forEach(function (item){
        self.removeEdge(item, node);
        //so for 'a','b' 
        
    })
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return this.list[fromNode][toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { 
    this.list[fromNode][toNode] = true;
    this.list[toNode][fromNode] = true; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(item, node) {
    // delete this.list[fromNode, toNode];
    // delete this.list[toNode, fromNode];
    delete this.list[item][node];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    //i travel graphie.list
    // if graghie.list[key] === object then i wan to recurse
    // if thing is undefined.
    
 
    
};

// var graphie = new Graph()
/*
 * Complexity: What is the time complexity of the above functions?
 */


