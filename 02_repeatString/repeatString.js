const number = Math.floor(Math.random() * 1000);
function repeatString(string, num) {
    let result = "";
    if (num < 0) {
        result += "ERROR"
    }
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
}
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
