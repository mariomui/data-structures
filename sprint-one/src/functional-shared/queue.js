var Queue = function() {
    var obj = {
        storage: {},
        magic: 0,
        offSet: 0,
        length: 0
    };
    _.extend(obj, queueMethods);

    return obj;
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
};

var queueMethods = {
    enqueue: function(value) {
        this.length++;
        this.storage[this.offSet] = value;
        console.log(this.offSet, '!');
        console.log(length);
        this.offSet++;
    },
    dequeue: function() {
        if (this.length !== 0) {
            this.length--;
        }
        var temp = this.storage[this.magic];
        this.magic++;

        return temp;
    },
    size: function() {
        // if (!size) {
        //     return 0;
        // }
        // if (this.length < 0) {
        //     this.length = 0;
        //     return this.length;

        // }
        return this.length || 0;
    },
};