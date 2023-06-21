import sortArray from './SelectionSort'

describe('sortArray', () => {
    it('sorts an array of numbers in ascending order', () => {
      const arr = [5, 3, 4, 1, 2];
      const result = sortArray(arr);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('returns a new array and does not modify the original array', () => {
      const arr = [5, 3, 4, 1, 2];
      const result = sortArray(arr);
      expect(arr).toEqual([5, 3, 4, 1, 2]); // Original array is unchanged
      expect(result).not.toBe(arr); // Returned array is a new array
    });
  
    it('works with an empty array', () => {
      const arr: number[] = [];
      const result = sortArray(arr);
      expect(result).toEqual([]);
    });
  
});