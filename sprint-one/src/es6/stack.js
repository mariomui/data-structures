class Stack {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    constructor() {
        this.storage = {};
        this.counter = 0;
    }
    push(value) {
        // var string = '' + someInstance.counter;
        // console.log('*', value);
        this.storage[this.counter] = value;
        this.counter++;
    };


    pop() {
        var end = this.size() - 1;

        console.log('popping location', end);
        var result = this.storage[end]; // >> 
        delete this.storage[end];
        this.counter--;
        return result;

    };
    size() {
        var result = this.counter;

        if (result <= 0 || result === undefined) {
            return 0;
        }
        return result || 0;
    }
}

var boo = new Stack();