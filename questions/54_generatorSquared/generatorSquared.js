// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

function* squaredGen(num, target) => {
    while ((num * num) > target) {
        yield num * num;
    }
}  

module.exports = { sqauredGen };
