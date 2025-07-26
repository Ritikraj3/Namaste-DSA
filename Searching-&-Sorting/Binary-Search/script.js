function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (right >= left) {

        let middle = ((left+right)/2)

        if (target == arr[middle]) {
            return middle
        }
        else if (target < arr[middle]) {
            right = middle - 1
        }
        else {
            left = middle + 1
        }
    }
    return -1
}

let result = binarySearch([1, 2, 3, 4, 5], 3)

console.log(result);