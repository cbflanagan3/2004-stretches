const twoNumberSum = (arr, target) => {
    const sortedArray = arr.sort((a,b) => a - b)
    let l = 0;
    let right = arr.length - 1;
    while(l(r)) {
        let sum = sortedArray[l] + sortedArray[R]
        if (sum === target){
            reutn [sorted[l], sorted[r]]
        } else if (sum > target) {
            r--;
        } else if(sum<target) {
            l++;
        }
    }
    return null;
}