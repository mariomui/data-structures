

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//hashbaby hashbaby._storage

HashTable.prototype.insert = function(k, v) {
  var bucket = []
  var tuple = [k , v]
  bucket.push(tuple);
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    this._storage.set(index, bucket);
  } else {
    this._storage
      .each( (element, i, arr) => {
        if ( i === index ){ 
          const currElem = arr[i];
          for (var j =0; j < currElem.length; j++) {
            if (currElem[j][0] === k) {
              currElem[j][1] = v;
            } 
            
          } 
          arr[i].push(tuple);
        }
      });
  }
};
//if the first eleme of the tuple is equal to the first element of arr[i]
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetArr = this._storage.get(index);
  for (var i = 0; i < targetArr.length; i++) {
    const currElem = targetArr[i];
    if (currElem[0] === k) {
      return currElem[1];
    }
  }
  //
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // k is unhashed keystring

    // item = undefined;
    var targetArr = this._storage.get(index);
    for (var i = 0; i < targetArr.length; i++) {
      const currElem = targetArr[i];
      if (currElem[0] === k) {
         targetArr.splice(i,1);
      }
    }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


