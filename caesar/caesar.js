const caesar = function(string, encriptado) {
	let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let minusculas = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let numeros = '1234567890123456789012345678901234567890123456789012345678901234567890'
	let nuevaString = ''
	for (let i=0; i<string.length; i++) {
    	if (mayusculas.includes(string[i])) {
        	let indexMayus = mayusculas.indexOf(string[i]);
        	nuevaString += mayusculas[indexMayus + 26 + encriptado];
        } else if (minusculas.includes(string[i])) {
        	let indexMinus = minusculas.indexOf(string[i]);
            nuevaString += minusculas[indexMinus + 26 + encriptado];
        } else if (numeros.includes(string[i])) {
        	let indexNum = numeros.indexOf(string[i]);
            nuevaString += numeros[indexNum + 30 + encriptado];
        } else {
        	nuevaString += string[i]
        }
    }
    return nuevaString
};

module.exports = caesar;
