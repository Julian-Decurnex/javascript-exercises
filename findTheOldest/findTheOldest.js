const findTheOldest = function(array) {
	const año = new Date().toString().slice(11, -47)
    let theOldest = array[0];
	const getAge = (object) => {
		let edad = 0
        if (object.yearOfDeath) {
            edad = object.yearOfDeath - object.yearOfBirth
        } else {
            edad = año - object.yearOfBirth
        }
        return edad
    }
    
    for (let i=0; i<array.length; i++) {
        if (getAge(array[i]) > getAge(theOldest)) {
        	theOldest = array[i]
        }
    }
    return theOldest.name
};

module.exports = findTheOldest;