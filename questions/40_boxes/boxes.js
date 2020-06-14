//YOUR CODE HERE
class Box {
    constructor(color, capacity, contents) {
        this.color = color,
        this.capacity = capacity,
        this.contents = []
    }

    pack() {
         if (this.contents.length >= this.capacity) {
            throw new Error ('No room!')
        } else {
            this.contents.push(new Box);
        }
    }

    unpack() {

        console.log(this.contents)
        return this.contents.color;
    }

}

module.exports = { Box };
