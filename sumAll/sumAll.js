const sumAll = function(x, y) {
	let biggerNum = 0
    let smallerNum = 0
    if (typeof x === 'number' && typeof y === 'number' && x < 0 && y < 0) {
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
    } else {
    	return 'ERROR'
    }
};

module.exports = sumAll;
