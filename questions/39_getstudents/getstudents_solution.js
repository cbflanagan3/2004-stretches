const getStudent = (name) => {
    if(typeof name != 'string') {
        throw new Error ('not a string');
    }
    return axios.get('https://fullstack.com/api/cohort2004')
        .then((data) => {
            for(let student in data) {
                if(data[student].name === name) {
                    return {
                        count:Object.values(data).length,
                        student:{
                            ...data[student],
                        }
                    }
                }
            }
            return {
                count: Object.values(data).length,
                student: 'no student found'
            }
        })
        .catch(error) => {
            throw new Error(error)
        }
}
