// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let triString = '';
    let startPoint = 1;
    for (let i = 1; i <= n; i++) {
        for (let x = 1; x <= i; x++) {
            triString += startPoint;
            startPoint++;
        }
        if (triString.length > i) {
        triString += '\n';
        }
        // let x = 0;
        // while (x < i) {
        //     x += 1;
        //     triString = triString + startPoint;
        //     x++;
        //     startPoint++;
        }
 
    return triString;
};

module.exports = { floydsTriangle };
