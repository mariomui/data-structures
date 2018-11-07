var Stack = function() {
    var someInstance = {
        counter: 0,
        storage: {},
    };

    // var counter = 0;

    // Use an object with numeric keys to store values
    // var storage = {};
    // Implement the methods below
    someInstance.push = function(value) {
        // var string = '' + someInstance.counter;
        // console.log('*', value);
        someInstance.storage[someInstance.counter] = value;
        someInstance.counter++;
    };

    someInstance.pop = function() {
        var end = someInstance.size() - 1;

        console.log('popping location', end);
        var result = someInstance.storage[end];
        delete someInstance.storage[end];
        someInstance.counter--;
        return result;

    };

    someInstance.size = function() {
        var result = someInstance.counter;
        if (result < 0) {
            return 0;
        }
        return result || 0;
    };

    return someInstance;
};