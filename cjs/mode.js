"use strict";
/**
 * Finds the mode of an array's data.
 *
 * @param inputs The input array.
 * @returns The mode(s) of the array.
 */
function mode(inputs) {
    var frequencyMap = {};
    // Count the frequency of each number in the array
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var num = inputs_1[_i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    // Find the highest frequency
    var maxFrequency = Math.max.apply(Math, Object.values(frequencyMap));
    if (maxFrequency === 1)
        return [];
    // Collect all numbers that have the highest frequency
    var modes = Object.keys(frequencyMap)
        .filter(function (key) { return frequencyMap[Number(key)] === maxFrequency; })
        .map(function (key) { return Number(key); });
    return modes;
}
module.exports = mode;
