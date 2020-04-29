const checkAnagrams = (st1, str2) => {
    let tempStr1 = str1.split('').sort().join();
    let tempStr2 = str2.split('').sort().join();
    if (tempStr1 != tempStr2) {
        return false;
    }
    return true;
}