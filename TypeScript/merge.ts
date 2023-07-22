function merge(left: number[], right: number[]): number[] {

    var result: number[] = new Array<number>(left.length + right.length);

    var left_index: number = 0;
    var right_index: number = 0;
    var result_index: number = 0;

    // Put data in temp array
    while (left_index < left.length && right_index < right.length) {
        if (left[left_index] < right[right_index]) {
            result[result_index] = left[left_index];
            left_index++;
        }
        else {
            result[result_index] = right[right_index];
            right_index++;
        }
        result_index++;
    }

    // Clear remaining data
    while (left_index < left.length) {
        result[result_index] = left[left_index];
        left_index++;
        result_index++;
    }

    while (right_index < right.length) {
        result[result_index] = right[right_index];
        right_index++;
        result_index++;
    }

    return result
}

export default merge;