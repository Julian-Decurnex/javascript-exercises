const fibonacci = function(number) {
	let sequence = [0, 0]
    if (number < 0) {
        return 'OOPS'
    } else {
        for (let i=0; i<number; i++) {
            if (sequence.length<=2) {
            	sequence.push(1)
            } else {
            	let valor1 = sequence[sequence.length-1];
            	let valor2 = sequence[sequence.length-2];
		    	sequence.push(valor1 + valor2);
            }
        }
    }
    return(sequence[sequence.length - 1])
};

module.exports = fibonacci;
