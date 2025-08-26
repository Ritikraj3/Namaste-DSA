//Approach -1 (Doubling the array)

function nextGreaterElement(nums) {
    let arr = [...nums, ...nums] 
    let n = arr.length
    let stack = []
    let ans = Array(n).fill(-1)

    stack.push(arr[n-1]) 

    for(let i = n-2; i >= 0; i--) {
        while(stack.length) {
            let top = stack[stack.length-1]
            if(arr[i] < top) {
                ans[i] = top
                break
            } else {
                stack.pop()
            }
        }
        stack.push(arr[i])
    }
    return ans.slice(0, n/2)
}

console.log(nextGreaterElement([1,2,1]));


// Approach -2 (without doubling the array)

function nextGreaterElement2(nums) {
    let n = nums.length
    let stack = []
    let ans = Array(n).fill(-1)

    stack.push(nums[n-1])

    for(let i = (2*n)-2; i >= 0; i--) {
        while(stack.length) {
            let top = stack[stack.length-1]
            if(nums[i % n] < top) {
                ans[i % n] = top
                break
            } else {
                stack.pop()
            }
        }
        stack.push(nums[i % n])
    }
    return ans.slice(0,n)
}

console.log(nextGreaterElement2([1,2,1]));