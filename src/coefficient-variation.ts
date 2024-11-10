import average = require('@santi100/average-lib');
import standardDeviation = require('./standard-deviation');

function coefficientOfVariation(inputs: number[]): number;
function coefficientOfVariation(inputs: number[], population: boolean): number;

function coefficientOfVariation(inputs: number[], population = true): number {
	if (inputs.length === 0) return NaN;
	return standardDeviation(inputs, population) / Math.abs(average(inputs));
}

export = coefficientOfVariation;
