const getTheTitles = function(array) {
    const newArray = array.map(function(element) {
        return element.title
    })
    return newArray
};

module.exports = getTheTitles;
