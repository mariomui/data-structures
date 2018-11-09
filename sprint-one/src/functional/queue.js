var Queue = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var offSet = 0;

    var length = 0;
    var magic = 0;
    // Implement the methods below
    //FIFO

    //then i pop it in.
    /* 
    length = 3
     1 2 3 push into -1
     1 1 2 3 

     1 2 3 pop from -1

     length = 4;
     1 1 2 3 push to -1;
    */
    someInstance.enqueue = function(value) {
        length++;
        storage[offSet] = value;
        offSet++;
    };
    someInstance.dequeue = function() {
        length--;
        var temp = storage[magic];
        magic++;

        return temp;
    };

    someInstance.size = function() {
        // if (!size) {
        //     return 0;
        // }
        if (length < 0) {
            length = 0;
            return length;

        }
        return length || 0;
    };

    return someInstance;
}