expand(expansion, extraBoxes) {
    for(let i = 0; i < extraBoxes.length; i++) {
        this.capacity += expansion;
        const [col, cap] = extraBoxes[i];
        this.pack(col, cap);
    }
}

loot(idx) {
    if(this.contents[idx]) {
        return this.contents[idx];
    } else {
        const randIdx = Math.floor(Math.random()*this.contents.length)
        return this.contents[randIdx];
    }
}