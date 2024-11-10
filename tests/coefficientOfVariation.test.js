describe('coefficientOfVariation', () => {

    const { coefficientOfVariation } = require('..');
  describe('population', () => {
      // Calculate coefficient of variation for a list of positive numbers
      it('should calculate the coefficient of variation for a list of positive numbers', () => {
        const inputs = [10, 20, 30, 40, 50];
        const result = coefficientOfVariation(inputs);
        expect(result).toBeCloseTo(0.4714);
      });
  });
  describe('sample', () => {
    // Calculate coefficient of variation for a list of positive numbers
    it('should calculate the coefficient of variation for a list of positive numbers', () => {
      const inputs = [10, 20, 30, 40, 50];
      const result = coefficientOfVariation(inputs, false);
      expect(result).toBeCloseTo(0.5270);
    });
});

    // Handle empty input list gracefully
    it('should return NaN when the input list is empty', () => {
      const inputs = [];
      const result = coefficientOfVariation(inputs);
      expect(result).toBeNaN();
    });
});
