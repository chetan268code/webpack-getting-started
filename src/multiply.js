// var multiply = function (a, b) {
//     var total = 0;
//     for (var i = 0; i < b; i++) {
//         total = sum(a, total);
//     }
//     return total;
// };

// var sum = require('./sum');
// var multiply = function (a, b) {
//     var total = 0;
//     for (var i = 0; i < b; i++) {
//         total = sum(a, total);
//     }
//     return total;
// };
// module.exports = multiply;

import sum from './sum';
const multiply = (a, b) => {
    let total = 0;
    for(let i=0;i<b;i++) {
        total = sum(a, total);
    }
    return total;
};
export default multiply;