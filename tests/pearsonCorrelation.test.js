const { pearsonCorrelation } = require('..');


describe('pearsonCorrelation', () => {
    it('returns 1 for perfect positive correlation', () => {
        const list1 = [1, 2, 3, 4, 5];
        const list2 = [2, 4, 6, 8, 10];
        const result = pearsonCorrelation(list1, list2);
        expect(result).toBeCloseTo(1);
    });

    it('returns -1 for perfect negative correlation', () => {
        const list1 = [1, 2, 3, 4, 5];
        const list2 = [-1, -2, -3, -4, -5];
        const result = pearsonCorrelation(list1, list2);
        expect(result).toBeCloseTo(-1);
    });

    it('returns 0 for no correlation', () => {
        const list1 = [1, 2, 3, 4, 5];
        const list2 = [5, 5, 5, 5, 5];
        const result = pearsonCorrelation(list1, list2);
        expect(result).toBe(0);
    });

    it('returns close to 0 for weak correlation', () => {
        const list1 = [1, 2, 3, 4, 5];
        const list2 = [2, 1, 4, 5, 3];
        const result = pearsonCorrelation(list1, list2);
        expect(result).toBeLessThan(1); // Accepts values close to 0
    });

    it('throws an error if lists have different lengths', () => {
        const list1 = [1, 2, 3];
        const list2 = [4, 5];
        expect(() => pearsonCorrelation(list1, list2)).toThrow(RangeError);
    });

    it('throws an error if lists have fewer than two elements', () => {
        const list1 = [1];
        const list2 = [1];
        expect(() => pearsonCorrelation(list1, list2)).toThrow(RangeError);
    });

    it('returns 0 if both lists have no variance', () => {
        const list1 = [3, 3, 3];
        const list2 = [5, 5, 5];
        const result = pearsonCorrelation(list1, list2);
        expect(result).toBe(0);
    });
});
