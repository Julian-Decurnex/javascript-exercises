const snakeCase = function(string) {
    let abc = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890'
    let newString = ''
    for (let i=0; i<string.length; i++) {
        if (abc.includes(string[i]) === true) {
            newString += string[i];
        } else if (abc.includes(string[i]) === false && newString[newString.length-1] !== '_') {
            newString += '_';
        } else {
        	continue;
        }
    }
    
    if (newString[newString.length-1] === '_') {
        	return newString.toLowerCase().slice(0, -1)
        } else {
    return newString.toLowerCase()
    }
};

module.exports = snakeCase;
