class Queue {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    constructor() {
        this.magic = 0;
        this.offSet = 0;
        this.length = 0;
        this.storage = {};

    }
    enqueue(value) {
        this.length++;
        this.storage[this.offSet] = value;
        console.log(this.offSet, '!');
        console.log(length);
        this.offSet++;
    };

    dequeue() {
        if (this.length !== 0) {
            this.length--;
        }
        var temp = this.storage[this.magic];
        this.magic++;

        return temp;
    };

    size() {
        // if (!size) {
        //     return 0;
        // }
        // if (this.length < 0) {
        //     this.length = 0;
        //     return this.length;

        // }
        return this.length || 0;
    };

}

var jack = Queue();