const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let resultado = 0
	for (let i=0; i<array.length; i++) {
    	resultado += array[i]
    }
    return resultado
};

const multiply = function(x, y) {
  return x * y;
};

const power = function(x, y) {
	let resultado = x
	for (i=y-1; i>0; i--) {
    	resultado *= x
  }
  return resultado;
};

const factorial = function(numero) {
	let resultado = 1
	for (let i=1; i<=numero; i++) {
    	resultado *= i
    }
    return resultado;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
