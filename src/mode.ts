/**
 * Finds the mode of an array's data.
 *
 * @param inputs The input array.
 * @returns The mode(s) of the array.
 */

function mode(inputs: number[]): number[] {
	const frequencyMap: { [key: number]: number } = {};

	// Count the frequency of each number in the array
	for (const num of inputs) {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	}

	// Find the highest frequency
	const maxFrequency = Math.max(...Object.values(frequencyMap));

	if (maxFrequency === 1) return [];

	// Collect all numbers that have the highest frequency
	const modes = Object.keys(frequencyMap)
		.filter((key) => frequencyMap[Number(key)] === maxFrequency)
		.map((key) => Number(key));

	return modes;
}

export = mode;
