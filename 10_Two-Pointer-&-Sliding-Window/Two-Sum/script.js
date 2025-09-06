 function twoSum (nums, target) {
    let map = {};

    // for (let i = 0; i < nums.length; i++) {
    //     let n = nums[i];

    //     if (map[target - n] >= 0) {
    //         return [map[target - n], i]
    //     } else {
    //         map[n] = i;
    //     }
    // } 
    //--------------------------------------------------

    let n = nums.length
    for(let i = 0; i < n; i++) {
        map[nums[i]] = i
    }

    for(let i = 0; i < n; i++) {
        let pairNumber = target - nums[i]

        if(map[pairNumber] && map[pairNumber] != i) {
            return [i, map[pairNumber]]
        }
    }
}

console.log(twoSum([2,7,11,15],9));