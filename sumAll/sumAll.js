const sumAll = function(x, y) {
	let biggerNum = 0
    let smallerNum = 0
    if (x < 0 || y < 0) {
        return 'ERROR'
    } else if (typeof x !== 'number' || typeof y !== 'number') {
        return 'ERROR'
    } else {
    	if (x > y) {
    		biggerNum = x
            smallerNum = y
        } else {
        	biggerNum = y
            smallerNum = x
        }
        let resultado = 0
        for (let i=smallerNum; i<=biggerNum; i++) {
            resultado += i
        }
        return resultado
    }
};

module.exports = sumAll;
