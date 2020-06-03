//write a function that takes a function, and makes it callable with two invocations

const extensions = (cb) => {
    if (typeof cb != 'function'){
        throw new Error ('Error');
    } else {
        return function(argOne){
            if (typeof argOne != 'number') {
                throw new Error ('Error');
            }
            else { 
                return function(argTwo) {
                if (typeof argTwo != 'number') {
                    throw new Error ('Error');
                }
                else {
                    return cb(argOne, argTwo)
                }
            }
        }
            
    }
}


};

module.exports = { extensions };
