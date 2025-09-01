function peakIndex (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l)/2);

        if (arr[m] < arr[m+1]) {
            // Peak is on the right side
            l = m + 1;
        } else {
            // Peak is at m or on the left side
            r = m;
        }
    }
    return r;  // or return l (both same)
}


// 🔹 Step-by-step for [0,2,5,7,10,6,3]

// l=0, r=6

// m=3 → arr[3]=7, arr[4]=10 → arr[m]<arr[m+1] → l=4

// Now l=4, r=6

// m=5 → arr[5]=6, arr[6]=3 → arr[m]>arr[m+1] → r=5

// Now l=4, r=5

// m=4 → arr[4]=10, arr[5]=6 → arr[m]>arr[m+1] → r=4

// Now l=4, r=4 → stop loop.

// 👉 Returns 4 which is correct (peak = 10 at index