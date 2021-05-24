const caesar = function(string, encriptado) {
	//STRING PARA USAR DE REFERENCIA
	let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let minusculas = 'abcdefghijklmnopqrstuvwxyz'
    let numeros = '1234567890'
	//LA STRING QUE VOY A DEVOLVER
	let nuevaString = ''
	//FUNCION PRINCIPAL PARA CHEQUEAR TODAS LAS LETRAS PROVISTAS POR EL ARGUMENTO STRING
	for (let i=0; i<string.length; i++) {
		//SI EL ENCRIPTADO ES POSITIVO HACEMOS ESTO
    	if (encriptado >= 0) {
			//SI ES UNA MAYUSCULA CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UNA LETRA DIFERENTE
        	if (mayusculas.includes(string[i])) {
        		let indexMayus = mayusculas.indexOf(string[i]);
        		nuevaString += mayusculas[(indexMayus + encriptado) % mayusculas.length];
			//SI ES UNA MINUSCULA CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UNA LETRA DIFERENTE
        	} else if (minusculas.includes(string[i])) {
        		let indexMinus = minusculas.indexOf(string[i]);
            	nuevaString += minusculas[(indexMinus + encriptado) % minusculas.length];
			//SI ES UN NUMERO CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UN NUMERO DIFERENTE
        	} else if (numeros.includes(string[i])) {
        		let indexNum = numeros.indexOf(string[i]);
            	nuevaString += numeros[(indexNum + encriptado) % numeros.length];
				//SI EL ELEMENTO VISTO POR EL BUCLE FOR ES UN SIMBOLO O ALGO QUE NO ESTA EN LAS REFERENCIAS SIMPLEMENTE LO DEVOLVEMOS TAL CUAL
        	} else {
        		nuevaString += string[i]
        	}
			//SI EL ENCRIPTADO ES NEGATIVO HACEMOS ESTO
        } else if (encriptado < 0) {
			//SI ES UNA MAYUSCULA CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UNA LETRA DIFERENTE
        	if (mayusculas.includes(string[i])) {
        		let indexMayus = mayusculas.indexOf(string[i]);
        		nuevaString += mayusculas[(((indexMayus + encriptado) % mayusculas.length) + mayusculas.length) % mayusculas.length];
			//SI ES UNA MINUSCULA CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UNA LETRA DIFERENTE
        	} else if (minusculas.includes(string[i])) {
        		let indexMinus = minusculas.indexOf(string[i]);
            	nuevaString += minusculas[(((indexMinus + encriptado) % minusculas.length) + minusculas.length) % minusculas.length];
			//SI ES UN NUMERO CHEQUEA LA REFERENCIA Y DEVUELVE SEGUN EL ENCRIPTADO PEDIDO UN NUMERO DIFERENTE
        	} else if (numeros.includes(string[i])) {
        		let indexNum = numeros.indexOf(string[i]);
            	nuevaString += numeros[(((indexNum + encriptado) % numeros.length) + numeros.length) % numeros.length];
			//SI EL ELEMENTO VISTO POR EL BUCLE FOR ES UN SIMBOLO O ALGO QUE NO ESTA EN LAS REFERENCIAS SIMPLEMENTE LO DEVOLVEMOS TAL CUAL
        	} else {
        		nuevaString += string[i]
        	}
        }
    }
    return nuevaString
};

module.exports = caesar;
