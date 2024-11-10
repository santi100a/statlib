import standardDeviation = require('./standard-deviation');

function variance(inputs: number[]): number;
function variance(inputs: number[], population: boolean): number;
function variance(inputs: number[], population = true): number {
	return Math.pow(standardDeviation(inputs, population), 2);
}

export = variance;
