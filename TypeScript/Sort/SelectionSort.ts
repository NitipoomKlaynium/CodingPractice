function SelectionSort(arr: number[]): number[] {

    var arr: number[] = [...arr];

    for (let i:number = 0 ; i < arr.length ; i++) {

        //Find minimum in remaining array   
        let min_index:number = i;
        for (let j:number = i + 1 ; j < arr.length ; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }

        //Swap found minimum with first
        let temp:number = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }

    return arr;
}

export default SelectionSort;