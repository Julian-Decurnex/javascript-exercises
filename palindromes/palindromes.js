const palindromes = function (string) {
	let letras = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'

    //quitando los simbolos al string
    let newString = ''
    for (let i=0; i<string.length; i++) {
    	if (letras.includes(string[i])) {
        newString += string[i].toLowerCase()
    	} else {
        	continue;
        }
    }
    
    //escribiendo la string al reves
    let newStringReversed = '' 
    for (let i=string.length-1; i>=0; i--) {
    	if (letras.includes(string[i])) {
        newStringReversed += string[i].toLowerCase()
    	} else {
        	continue;
        }
    }

    //chequeando si es capicua
    if (newString === newStringReversed) {
        return true
    } else {
        return false
    }
};

module.exports = palindromes;
