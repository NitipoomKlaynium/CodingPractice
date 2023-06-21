function BubbleSort(arr: number[]): number[] {

    var arr: number[] = [...arr];
    let i: number, j: number, temp: number[];
    let swapped: boolean;
    let n: number = arr.length;

    // Traverse all element
    for (i = 0 ; i < n ; i++) {
        swapped = false;

        // Last i elements are already in place
        for (j = 0 ; j < n - i - 1 ; j++) {

            // Swap if arr[j] > arr[j + 1]
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped == false) break;
    }

    return arr;
}

export default BubbleSort;