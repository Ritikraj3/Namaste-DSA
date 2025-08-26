// leetcode url = https://leetcode.com/problems/remove-duplicates-from-sorted-array/  

// [1,2,4,8,12] --> sorted, increasing order --> a[i] < a[i+1]
// [12,9,8,7,5,1] --> sorted, decreasing order --> a[i] > a[i+1]
// [1,2,3,4,4,5,5,6,7,7] --> sorted, non-decreasing order --> a[i] <= a[i+1]

function removeDuplicates(arr) {
    let x = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[x]) {
        x++
        arr[x] = arr[i]
    }
}
return x + 1
}

console.log(removeDuplicates([1,2,3,4,4,5,5,6,7,7]));