const repeatString = function(string, numero) {
    let newString = '';
    if (numero < 0) {
        return 'ERROR'
    } else {
        for (let i=1; i<numero+1; i++) {
            newString += string
        }
        return newString
    }   
};

module.exports = repeatString;
