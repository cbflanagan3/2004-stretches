class Iterator {
    constructor(arr) {
        if(!Array.isArray(arr)){
            throw new Error('requires an array');
        }
        this.arr = arr;
        this.index = 0;
    }

    next() {
        const done = this.index > this.arr.length;
        const value = this.arr[this.index];
        this.index++;
        return { done, value };
    }
}