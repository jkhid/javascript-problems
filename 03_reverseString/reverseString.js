function reverseString(str) {
    const spliStr = str.split("");
    const revStr = spliStr.reverse();
    const reverse = revStr.join("");
    return reverse;
}
reverseString("");
// Do not edit below this line
module.exports = reverseString;
