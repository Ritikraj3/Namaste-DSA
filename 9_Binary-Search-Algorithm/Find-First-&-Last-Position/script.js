function searchRange(arr, target) {
    let l = 0
    let r = arr.length - 1
    
    // default value if target not found
    let ans = [-1, -1]

    //finding starting index of target
    while(l < r) {
        let m = l + Math.floor((r - l)/2)
        if(arr[m] < target) {
            l = m + 1
        } else {
            r = m
        }
    }
    //updating with starting point in answer
    if(arr[l] === target) ans[0] = l

    // finding last point / endpoint of target
    l = 0
    r = arr.length - 1
    while(l < r) {
        let m = l + Math.ceil((r - l)/2)
        if(arr[m] > target) {
            r = m - 1
        } else {
            l = m
        }
    }
    if(arr[l] === target) ans[1] = l
    return ans
}

console.log(searchRange([1,1,2,2,3,3,3,3,3,4,4,5], 3));
console.log(searchRange([2,2,3,3,4,4,5,5,6], 5));
console.log(searchRange([2,2,4,4,5,5,6,6,], 7));

// --------------------------------------------------------------------------------------------------
// APPROACH 2 ==> 

function searchRange2 (arr, target) {
    let l = 0
    let r = arr.length - 1
    let ans = [-1, -1]

    //Logic for finding first position of target
    while(l <= r) {
        let m = l + Math.floor((r - l)/2) 
        if(arr[m] === target) {
            ans[0] = m
            r = m - 1
        } else if(arr[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    l = 0
    r = arr.length-1

    // Logic for finding last position of target
    while(l <= r) {
        let m = l + Math.floor((r - l)/2) 
        if(arr[m] === target) {
           ans[1] = m
           l = m + 1 
        } else if(arr[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return ans
}

console.log(searchRange2([2,2,4,4,7,7,7,7,4], 7));