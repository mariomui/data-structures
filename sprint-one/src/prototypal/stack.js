var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var obj = Object.create(stackMethods);
    obj.storage = {};
    obj.counter = 0;
    //parametization skip
    //3rd step is to give it powers
    return obj;

};

stackMethods = {
    push: function(value) {
        // var string = '' + someInstance.counter;
        // console.log('*', value);
        this.storage[this.counter] = value;
        this.counter++;
    },

    pop: function() {
        var end = this.size() - 1;

        console.log('popping location', end);
        var result = this.storage[end]; // >> 
        delete this.storage[end];
        this.counter--;
        return result;

    },
    size: function() {
        var result = this.counter;

        if (result <= 0 || result === undefined) {
            return 0;
        }
        return result || 0;
    }
};