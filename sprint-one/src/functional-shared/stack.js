var extend = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
        for (var key in args[i]) {
            const currElem = args[i];
            if (!(key in obj)) {
                obj[key] = currElem[key];
            }
        }
    }
    return obj;
}

var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var obj = {
        counter: 0,
        storage: {},
    };
    extend(obj, stackMethods);
    return obj;
};

var stackMethods = {

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
        console.log('**', result);
        if (result <= 0 || result === undefined) {
            return 0;
        }
        return result || 0;
    }
};