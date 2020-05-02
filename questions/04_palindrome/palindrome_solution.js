const validPalindrome = (str) => {
    const newString = String(str);
    if(newString.length === 0 || newString.length ===1) {
        return true;
    }
    if(newSTring[0]===newString[newString.length -1]) {
        return validPalindrome(newString.slice(1, newString.length-1))
    }
    return false;
}