const antiTrollsSecurity = (string) => {

    if(string.length > 100){
        return ""
    }

    let spacesCount = 0

    for (let i = 0; i < string.length; i++) {
        if(string[i] === " "){
            spacesCount++
        }
    }

    if(spacesCount === 0){
        let stringWithoutSpaces = ""
        for (let i = 0; i < string.length; i++) {
            stringWithoutSpaces += "*"
        }
        return stringWithoutSpaces
    }

    if(spacesCount === 1){
        return string.split("").reverse().join("")
    }

    if(string.includes("a") || string.includes("e") || string.includes("i") || string.includes("o") || string.includes("u")){
        let stringArray = string.split("")
        console.log(stringArray);
        const filtered = stringArray.filter(letter => letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u" && letter !== "A" && letter !== "E" && letter !== "I" && letter !== "O" && letter !== "U")
        console.log(filtered);
        return filtered.join("")
    }

};

module.exports = antiTrollsSecurity;
