//YOUR CODE HERE
class Box {
    constructor(color, capacity, contents) {
        this.color = color,
        this.capacity = capacity,
        this.contents = []
    }

    pack(col, cap) {
         if (this.contents.length !== this.capacity) {
            this.contents.push(new Box(col, cap));
           
        } else {
            throw new Error ('No room!')
        }
    }

    unpack() {
        const result = []
        if (!this.contents.length) {
            result.push(this.color)
        } else {
            result.push(this.color);
            for (let i = 0; i < this.contents.length; i++) {
                result.push(...this.contents[i]);
            }
        }
        return result;
    }

}

module.exports = { Box };
