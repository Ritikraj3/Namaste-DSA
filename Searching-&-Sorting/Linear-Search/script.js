let arr = [4,9,1,0,2]

function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1   
}

let result = (search(arr, 0));
console.log(result);