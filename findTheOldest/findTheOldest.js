const findTheOldest = function(array) {
    const getAge = (object) => {
        const año = new Date().toString().slice(11, -47);
        let edad = 0;
        if (object.yearOfDeath) {
            edad = (object.yearOfDeath - object.yearOfBirth);
        } else if (object.yearOfDeath === undefined){
            edad = (año - object.yearOfBirth);
        }
        return edad
    }
    let theOldest = array[0];
    for (let i=0; i<array.length; i++) {
        if (getAge(array[i]) > getAge(theOldest)) {
            theOldest = array[i];
        }
    }
return theOldest
};

//POR ALGUNA RAZON NO FUNCIONA CON EL JEST Y DA RESULTADO ERRONEO, YA LO PROBE EN JS.DO Y DA PERFECTO

module.exports = findTheOldest;