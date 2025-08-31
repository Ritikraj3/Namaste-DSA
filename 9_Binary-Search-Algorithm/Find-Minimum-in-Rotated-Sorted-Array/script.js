function findMin (arr) {
    let l = 0
    let r = arr.length-1

    while(l <= r) {

        //complete array is sorted
        if(arr[l] <= arr[r]) return arr[l]

        let m = l + Math.floor((r - l)/2)
        
        //when inflection point occurs
        if(arr[m] < arr[m-1]) return arr[m]
        
        //find unsorted half
        if(arr[l] > arr[m]) {
            r = m - 1
        } else {
            l = m + 1
        }

    }
}

console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([4,5,6,7,8,9,0,1,2]));
console.log(findMin([7,2,3,4,5,6]));
console.log(findMin([7,8,2,3,4,5,6]));