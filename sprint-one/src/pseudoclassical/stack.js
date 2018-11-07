var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    this.storage = {};
    this.counter = 0;

};

var clone = new Stack();

Stack.prototype.push = function(value) {
    // var string = '' + someInstance.counter;
    // console.log('*', value);
    this.storage[this.counter] = value;
    this.counter++;
};


Stack.prototype.pop = function() {
    var end = this.size() - 1;

    console.log('popping location', end);
    var result = this.storage[end]; // >> 
    delete this.storage[end];
    this.counter--;
    return result;

};
Stack.prototype.size = function() {
    var result = this.counter;

    if (result <= 0 || result === undefined) {
        return 0;
    }
    return result || 0;
}