var Queue = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var shover = 0;
    var popper = 0;
    var size = 0;

    // Implement the methods below
    //FIFO
    //i have the length of my object. that is counter.

    //then i pop it in.
    /*
    0: a, 1: b, b:c
    0 is gone and then i grab the next one.
    how can i get zero dynamically
    length - counter = 0?
    1: b, b: c
    i want the next counter to be 1;

    so i pop 0 then i make the next nubmer to be popped one.
    and the next shover into popper-1;
    //and if i add or minus i do the size.
    */
    someInstance.enqueue = function(value) {
        //first in.
        console.log(someInstance[shover]);
        someInstance[shover] = value; // 0 >>something at 0
        shover--; // -1
        size++; // 1
    };

    someInstance.dequeue = function() {
        var temp = someInstance[shover - 1];
        delete someInstance[shover - 1]; //shover is 1>> delete 0
        shover++; //shover is now at 0;
        size--;
        return temp;
    };

    someInstance.size = function() {

        return size || 0;
    };

    return someInstance;
}