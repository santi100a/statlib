"use strict";
var sum = require("@santi100/summation-lib");
var average = require("@santi100/average-lib");
function standardDeviation(inputs, population) {
    if (population === void 0) { population = true; }
    var N = population ? inputs.length : inputs.length - 1;
    var mu = average(inputs);
    var tally = sum(function (n) { return Math.pow(inputs[n] - mu, 2); }, 0, inputs.length - 1);
    if (N === 0)
        return NaN;
    return Math.pow(tally / N, 0.5);
}
module.exports = standardDeviation;
