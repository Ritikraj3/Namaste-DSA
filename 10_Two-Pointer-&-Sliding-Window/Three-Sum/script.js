// Function to find all unique triplets in the array which gives the sum of zero

function threeSum(arr) {
    // Step 1: Sort the array so we can use two-pointer technique
    arr.sort((a, b) => a - b)

    let ans = []

    // Step 2: Fix one number (pivot) and use twoSum on the rest
    for (let i = 0; i < arr.length; i++) {

        // Skip duplicate pivots to avoid repeating triplets
        if (i === 0 || arr[i] !== arr[i - 1]) {
            twoSum(arr, i, ans)
        }
    }

    return ans
}


//   Helper function to find pairs for a fixed pivot that sum to zero

function twoSum(arr, x, ans) {
    // Left and right pointers
    let i = x + 1
    let j = arr.length - 1

    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x]

        if (sum < 0) {
            // If sum is too small → move left pointer to larger number
            i++
        }
        else if (sum > 0) {
            // If sum is too large → move right pointer to smaller number
            j--
        }
        else {
            // Found a valid triplet
            ans.push([arr[x], arr[i], arr[j]]) // pivot first for consistency

            // Move both pointers to look for new pairs
            i++
            j--

            // Skip duplicates for the left pointer
            while (i < j && arr[i] === arr[i - 1]) {
                i++
            }
        }
    }
}

// Example usage
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
