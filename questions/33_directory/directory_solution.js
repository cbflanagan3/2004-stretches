const directory = (data) => {
    let result = {}
    const recurse = (cur, add) => {
        if(typeof cur != 'object' || Array.isArray(cur)) {
            return result[add] = cur
        }
        for (let i in cur) {
            recurse(cur[i], add?add+'/'+i:i)
        }
    }
    recurse(data, '')
    return result;
}