import merge from "./merge";

describe("Merge array and sort", () => {
    it('work with two array', () => {
        expect(merge([1, 4, 7], [2, 3, 6, 9])).toStrictEqual([1, 2, 3, 4, 6, 7, 9]);
        expect(merge([9, 12, 17], [1, 4, 16, 21])).toStrictEqual([1, 4, 9, 12, 16, 17, 21]);
    })

    it('work with negative number', () => {
        expect(merge([-15, -7, 3, 8], [-21, -2, -1, 11])).toStrictEqual([-21, -15, -7, -2, -1, 3, 8, 11]);
        expect(merge([-16, -3, 4, 21], [1, 6, 12, 20])).toStrictEqual([-16, -3, 1, 4, 6, 12, 20, 21]);
    })

    it('work with duplicate number', () => {
        expect(merge([1, 2, 3, 5], [1, 2, 4, 5])).toStrictEqual([1, 1, 2, 2, 3, 4, 5, 5]);
        expect(merge([-4, -2, 1, 3], [-2, -1, 1, 2])).toStrictEqual([-4, -2, -2, -1, 1, 1, 2, 3]);
    })

    it('work with one empty array', () => {
        expect(merge([], [1, 3, 6, 123])).toStrictEqual([1, 3, 6, 123]);
        expect(merge([133, 167, 231, 243], [])).toStrictEqual([133, 167, 231, 243]);
    })

    it('work with two empty array', () => {
        expect(merge([], [])).toStrictEqual([]);
    })

    it('not modify original array', () => {
        const arr1: number[] = [3, 5, 6, 11];
        const arr2: number[] = [2, 4, 7, 18];
        expect(merge(arr1, arr2)).toStrictEqual([2, 3, 4, 5, 6, 7, 11, 18]);
        expect(arr1).toEqual([3, 5, 6, 11]);
        expect(arr2).toEqual([2, 4, 7, 18]);
    })
})