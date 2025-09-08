function maxWater(arr) {
    let i = 0
    let j = arr.length - 1
    
    let maxWater = 0

    while (i < j) {
        let area = Math.min(arr[i] , arr[j]) * (j - i)
        maxWater = Math.max(maxWater, area)

        if(arr[i] < arr[j]) {
            i++
        } else {
            j--
        }
    }
    return maxWater
}

console.log(maxWater([1,8,6,2,5,4,8,3,7]));