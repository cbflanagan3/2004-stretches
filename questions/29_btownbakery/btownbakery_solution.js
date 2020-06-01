const btwonbake = (recipe, supplies) => {
    if (typeof recipe != 'object' || typeof supplies != 'object') {
        throw new Error('not an object');
    }
    let numCakes = [];
    for(let key in recipe) {
        if(key in supplies) {
            numCakes.push(Math.floor(supplies[key] / recipe[key]))
        } else {
            return 0;
        }
    }
    return Math.min(...numCakes);
}