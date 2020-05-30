const movieposter = (array) => {
    if(!array || array.length === 0) {
        throw new Error();
    }

    const longestWord = array.reduce((acc, word) => {
        if (word.length > acc) {
            acc = word.length;
        }
    }, 0);
    let solution = '*'.repeat(longestWord + 4) + '\n'
    for (word in array){
        solution+='* '+array[word]+ ' '.repeat(longestWord - array[word].length) + 
        ' *\n';
    }
    solution += '*'.repeat(longestWord + 4) + '\n';
    return solution;
}