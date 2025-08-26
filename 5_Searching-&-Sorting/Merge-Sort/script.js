

function merge (left,right) {
    let merged = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            merged.push(left[i])
            i++
        } else {
            merged.push (right[j])
            j++
        }
    }
    return [...merged, ...left.slice(i), ...right.slice(j)]
}


function sortedArray (arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left  = sortedArray(arr.slice(0,mid))
    let right = sortedArray(arr.slice(mid))
    return merge (left, right)
}

let arr = [5,7,1,4,3,2,6]

console.log(sortedArray(arr));