//write a func that takes two arg... selectKey and obj

const comparator = (key, obj) => {
    let keys = [];
    for (let key in obj) {
        if (key) {
            keys.push(key);
        } else {
            return 'incorrect key';
        }
    }
    keys.sort;
    return obj; 
};
module.exports = { comparator };
