const fibonacci = function(number) {
	let sequence = [0, 0]
    for (let i=1; i<number; i++) {
    	let valor1 = sequence[sequence.length-1];
        let valor2 = sequence[sequence.length-2];
        if (sequence.length<=2) {
        	sequence.push(i)
        } else {
			sequence.push(valor1 + valor2);
        }
    }
    return(sequence[sequence.length-1])
};

module.exports = fibonacci;
