"use strict";
var sum = require("@santi100/summation-lib");
var average = require("@santi100/average-lib");
function pearsonCorrelation(list1, list2) {
    var N = list1.length;
    if (N !== list2.length)
        throw new RangeError('Both lists must have the same length.');
    if (N < 2)
        throw new RangeError('Lists must contain at least two elements.');
    var avg1 = average(list1);
    var avg2 = average(list2);
    // Calculate the summations needed for the Pearson correlation formula
    var numerator = sum(function (i) { return (list1[i] - avg1) * (list2[i] - avg2); }, 0, N - 1);
    var denominator = Math.sqrt(sum(function (i) { return Math.pow(list1[i] - avg1, 2); }, 0, N - 1) *
        sum(function (i) { return Math.pow(list2[i] - avg2, 2); }, 0, N - 1));
    // Avoid division by zero in case of no variance in one of the lists
    if (denominator === 0)
        return 0;
    return numerator / denominator;
}
module.exports = pearsonCorrelation;
