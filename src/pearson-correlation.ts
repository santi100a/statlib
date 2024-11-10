import sum = require('@santi100/summation-lib');
import average = require('@santi100/average-lib');

function pearsonCorrelation(list1: number[], list2: number[]): number {
	const N = list1.length;
	if (N !== list2.length)
		throw new RangeError('Both lists must have the same length.');
	if (N < 2) throw new RangeError('Lists must contain at least two elements.');

	const avg1 = average(list1);
	const avg2 = average(list2);

	// Calculate the summations needed for the Pearson correlation formula
	const numerator = sum((i) => (list1[i] - avg1) * (list2[i] - avg2), 0, N - 1);
	const denominator = Math.sqrt(
		sum((i) => Math.pow(list1[i] - avg1, 2), 0, N - 1) *
			sum((i) => Math.pow(list2[i] - avg2, 2), 0, N - 1)
	);

	// Avoid division by zero in case of no variance in one of the lists
	if (denominator === 0) return 0;

	return numerator / denominator;
}

export = pearsonCorrelation;
