function singleNonDuplicate (arr) {
    let l = 0
    let r = arr.length-1

    while(l <= r) {
        let m = l + Math.floor((r - l)/2) 
        if(arr[m] !== arr[m+1] && arr[m] !== arr[m-1]) return arr[m]

        //if pair exists om left side
        if(arr[m] == arr[m-1]) {
            //if odd no. of elements on leftside -->(single element lies here!)
            leftCount = (m-1)-l
            if(leftCount % 2 == 1) {
                r = m-2
            } else {
                l = m+1
            }
        } else {
            leftCount = m-l
            if(leftCount % 2 == 1) {
                r = m - 1
            } else {
                l = m + 2
            }
        }
        return arr[r]
    }
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));