import average = require('@santi100/average-lib');
import { mergeSort } from '@santi100/sorting-lib';

/**
 * Finds the median of the input array's data.
 *
 * @param inputs The input array.
 * @returns The median of the array.
 */
function median(inputs: number[]): number {
	if (inputs.length === 0) return NaN;
	const sortedInputs = mergeSort(inputs);
	const middle = Math.floor(inputs.length / 2);
	if (sortedInputs.length % 2 !== 0) return sortedInputs[middle];
	return average([
		sortedInputs[sortedInputs.length / 2 - 1],
		sortedInputs[sortedInputs.length / 2]
	]);
}

export = median;
