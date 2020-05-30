const getrootvalue = (object, val) => {
    for (let i in object) {
        if(typeof object[i] === 'object' && !Array.isArray(object[i])) {
            if(getrootvalue(object[i], val)) {
                return i;
            }
        } else {
            if(object[i].includes(val)) {
                return i;
            }
        }
    }
    return null;
}