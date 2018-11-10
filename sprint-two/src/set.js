var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

//this is set
setPrototype.add = function(item) {
  //input is a string
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  var flag = false;
  //loop through our collection
  for ( let key in this._storage) {
    if (item === key) {
      flag = true;
    }
  }
  //find it set flag for prep return

  return flag;
};

setPrototype.remove = function(item) {
  //input item string
  // for ( let key in this._storage) {
    // if (item === key) {
      delete this._storage[item];
    // }
  // }
  //output nothing does work of remove
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
