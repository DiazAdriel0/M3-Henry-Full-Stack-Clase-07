const levelOne = (a, b) => {return a + b};

const levelTwo = (letras) => {
    if(letras.length < 2) return letras
    if(letras.length === 2) {
        return letras.split("")[0]
    }
    const arrayLetras = letras.split("")
    const arrayReturn = []
    for (let i = 0; i < arrayLetras.length; i++) {
        arrayReturn.push(arrayLetras[i])
        i++
    }
    return arrayReturn.join("")
};

const levelThree = (a, b) => {
    let array = [...a,...b];
    const orderedArray = array.sort((a,b) => a - b);
    return orderedArray
};

const levelFour = (num) => {
    let numStringArray = num.toString().split("")
    let numArray = []
    numStringArray.forEach(num => numArray.push(Number(num)));
    let suma = numArray.reduce((acc,current) => acc = acc + current)
    let sumaInvertido = Number(suma.toString().split("").reverse().join(""))
    if (suma * sumaInvertido === num) return true
    return false
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
