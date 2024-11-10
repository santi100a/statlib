// Generated by Qodo Gen

describe('standardDeviation', () => {

    const { standardDeviation } = require('..');
    // Calculate standard deviation for a list of positive numbers
    it('should calculate population standard deviation for a list of positive numbers', () => {
      const inputs = [1, 2, 3, 4, 5];
      const result = standardDeviation(inputs);
      expect(result).toBeCloseTo(1.4142, 4);
    });

    it('should calculate sample standard deviation for a list of positive numbers', () => {
        const inputs = [1, 2, 3, 4, 5];
        const result = standardDeviation(inputs, false);
        expect(result).toBeCloseTo(1.5811, 4);
      });

    // Handle empty input list gracefully
    it('should return NaN when input list is empty', () => {
      const inputs = [];
      const result = standardDeviation(inputs);
      expect(result).toBeNaN();
    });
});