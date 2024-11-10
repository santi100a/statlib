"use strict";
var average = require("@santi100/average-lib");
var standardDeviation = require("./standard-deviation");
function coefficientOfVariation(inputs, population) {
    if (population === void 0) { population = true; }
    if (inputs.length === 0)
        return NaN;
    return standardDeviation(inputs, population) / Math.abs(average(inputs));
}
module.exports = coefficientOfVariation;
