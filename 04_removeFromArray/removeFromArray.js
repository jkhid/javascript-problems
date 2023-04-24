// const arr = [1, 2, 3, 4];
// function removeFromArray(arr, value1, value2, value3, value4) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value1) {
//             arr.splice(i, 1);
//             i--;
//         } else if (arr[i] === value2) {
//             arr.splice(i, 1);
//             i--;
//         } else if (arr[i] === value3) {
//             arr.splice(i, 1);
//             i--;
//         } else if (arr[i] === value4) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }  
//     return arr;
// };

function removeFromArray(array, ...args) {
    const newArr = [];

    array.forEach((item) => {
        if(!args.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr
}

// Do not edit below this line
module.exports = removeFromArray;
