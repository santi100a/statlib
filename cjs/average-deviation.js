"use strict";
var sum = require("@santi100/summation-lib");
var average = require("@santi100/average-lib");
function averageDeviation(inputs) {
    if (inputs.length === 0)
        return NaN;
    var avg = average(inputs);
    return (sum(function (n) { return Math.abs(inputs[n] - avg); }, 0, inputs.length - 1) / inputs.length);
}
module.exports = averageDeviation;
