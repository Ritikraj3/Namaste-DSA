function search (arr, target) {
    let l = 0
    let r = arr.length-1

    while(l <= r) {
        let m = l + Math.floor((r-l)/2)
        if(target === arr[m]) return m

        //left side is sorted
        if(arr[l] < arr[m]) {
            if(target <= arr[l] && target < arr[m]) {
                r = m-1
            } else {
                l = m+1
            }
        }
        // right side is sorted
        else {
            if(target > arr[m] && target <= arr[r]) {
                l = m+1
            } else {
                r = m-1
            }
        }
    }
    return -1
}

console.log(search([3,4,5,6,7,8,0,1,2],11));