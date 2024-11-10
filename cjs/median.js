"use strict";
var average = require("@santi100/average-lib");
var sorting_lib_1 = require("@santi100/sorting-lib");
/**
 * Finds the median of the input array's data.
 *
 * @param inputs The input array.
 * @returns The median of the array.
 */
function median(inputs) {
    if (inputs.length === 0)
        return NaN;
    var sortedInputs = (0, sorting_lib_1.mergeSort)(inputs);
    var middle = Math.floor(inputs.length / 2);
    if (sortedInputs.length % 2 !== 0)
        return sortedInputs[middle];
    return average([
        sortedInputs[sortedInputs.length / 2 - 1],
        sortedInputs[sortedInputs.length / 2]
    ]);
}
module.exports = median;
