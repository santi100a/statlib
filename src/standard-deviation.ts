import sum = require('@santi100/summation-lib');
import average = require('@santi100/average-lib');

function standardDeviation(inputs: number[]): number;
function standardDeviation(inputs: number[], population: boolean): number;
function standardDeviation(inputs: number[], population = true): number {
	const N = population ? inputs.length : inputs.length - 1;
	const mu = average(inputs);
	const tally = sum(
		(n: number) => Math.pow(inputs[n] - mu, 2),
		0,
		inputs.length - 1
	);

	if (N === 0) return NaN;

	return Math.pow(tally / N, 0.5);
}

export = standardDeviation;
