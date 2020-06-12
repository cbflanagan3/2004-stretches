const decyper = (code) => {
    const decyperWord = code => {
    const codeBook = { first: '', second: '', middle: '', last: ''};

    const codeArr = code.split('');

    for(let i = 0; i < code.length; i++) {
        const char=codeArr[i];

        if(!isNaN(parsInt(char))){
            codeBook.first+=char;
        }else if(!codeBook.last) {
            codeBook.last+=char;
        } else if (i===code.length-1){
            codeBook.second+=char;
        } else {
            codeBook.middle+=char;
        }
    }
    const charCode = String.fromCharCode(parseInt(codeBook.first))

    const result = charCode.concat(codeBook.second, codeBook.middle, codeBook.last);
    return result; 
}
    return sentence.split.
}