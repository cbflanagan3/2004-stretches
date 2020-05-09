const lockBox = (code, message) => {
    if (typeof code != 'number' || typeof message != 'string') {
        throw new Error('invalid type';
    }
    let accessCode = code;
    let secretMessage = message;
    return {
        modcode:(prevCode, newCode)=>{
            if(prevCode != accessCode) {
                throw new Error('Access Denied!');
            }
            else {
                accessCode = newCode;
                return accessCode;
            }
        },
        modMessage: (passCode, newMessage) => {
            if (passCode != accessCode) {
                throw new Error('Access Denied!');
            } else {
                secretMessage = newMessage;
                return secretMessage;
            }
        },
        revealMessage: (passCode) => {
            if (passCode != accessCode) {
                throw new Error('Access Denied!');
            } else {
                return secretMessage;
            }
        },
    };
};