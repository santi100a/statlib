describe('averageDeviation', () => {
    const { averageDeviation } = require('..');
    // Calculate average deviation for a list of positive numbers
    it('should calculate average deviation when given a list of positive numbers', () => {
      const inputs = [1, 2, 3, 4, 5];
      const result = averageDeviation(inputs);
      expect(result).toBeCloseTo(1.2);
    });

    // Handle empty input list by returning NaN
    it('should return NaN when input list is empty', () => {
      expect(averageDeviation([])).toBeNaN();
    });
});
