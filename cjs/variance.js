"use strict";
var standardDeviation = require("./standard-deviation");
function variance(inputs, population) {
    if (population === void 0) { population = true; }
    return Math.pow(standardDeviation(inputs, population), 2);
}
module.exports = variance;
