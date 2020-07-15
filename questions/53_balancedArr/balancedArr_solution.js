const balanced = (arr) => {
    const sum = { left:0, right:0}

    arr.forEarch((val) => (sum.right += val))

    for(let i = 0; i < arr.length; i++) {
        sum.right -= arr[i]
        if(sum.left === sum.right) {
            return i;
        }
        sum.left += arr[i]
    }
    return -1;
}