let arr = [1,2,3,4,5,5,6,4,4,3,2,3,1,3]

function removeElements(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[x] = arr[i]
            x++
        }
    }
    return x
}

console.log(removeElements(arr, 5))