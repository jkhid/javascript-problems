const sumAll = function(begin, end) {
    let sum = 0;
    if (begin < 0 || end < 0 || typeof begin !== 'number' || typeof end !== 'number') {
        sum = "ERROR";
    } else if (begin > end) {
        for (let i = end; i <= begin; i++) {
            sum += i;
        }
    } else {
        for (let i = begin; i <= end; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
