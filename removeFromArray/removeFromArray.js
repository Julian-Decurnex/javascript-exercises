const removeFromArray = function(array, ...variables) {
	for (let i=0; i<variables.length; i++) {
    	if (array.includes(variables[i])) {
        	array.splice(array.indexOf(variables[i]), 1)
        }
    }
    return array
}

module.exports = removeFromArray;
