//write a function that takes a function, and makes it callable with two invocations

const extensions = (cb, num1, num2) => {
    if (!cb || !num1 | !num2){
        throw 'Error';
    } else {
        cb(num1, num2);
    }
};

module.exports = { extensions };
