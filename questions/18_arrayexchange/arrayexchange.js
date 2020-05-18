//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
    if (typeof arr1 != 'array' || typeof arr2 != 'array') {
        throw 'Not an array';
    }
    let newArr1 = [];
    let newArr2 = [];
    for (let i = arr1.length; i >= 0; i--) {
        newArr2.push(arr[i]);
    }
    for (let i = arr2.length; i >= 0; i--) {
        newArr1.push(arr[i]);
    }
    newArr2 = arr2;
    newArr1 = arr1;
    console.log(arr1, arr2);
};

module.exports = { arrayexchange };
