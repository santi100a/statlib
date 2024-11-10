import sum = require('@santi100/summation-lib');
import average = require('@santi100/average-lib');

function averageDeviation(inputs: number[]): number {
	if (inputs.length === 0) return NaN;
	const avg = average(inputs);
	return (
		sum((n) => Math.abs(inputs[n] - avg), 0, inputs.length - 1) / inputs.length
	);
}

export = averageDeviation;
