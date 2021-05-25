function pigLatin(string) {
	let consonants = 'bcdfghjklmnpqrstvwxyz'
    let vowels = 'aeiou'
    let stringArray = string.split(' ')
    for (let i=0; i<stringArray.length; i++) {
		if (vowels.includes(stringArray[i][0])) {
    		return string + 'ay';
    	} else if (consonants.includes(string[0]) && consonants.includes(string[1]) && consonants.includes(string[2])) {
    		return string.slice(3) + string[0] + string[1] +string[2] + 'ay'
    	} else if (consonants.includes(string[0]) && consonants.includes(string[1])) {
    		return string.slice(2) + string[0] + string[1] + 'ay'
    	} else if (consonants.includes(string[0])) {
    		return string.slice(1) + string[0] + 'ay';
    	}
    }
};
  
  module.exports = pigLatin;
