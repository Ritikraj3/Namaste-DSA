// Approach 1
function mergeSorted(n1, m, n2, n) {
    let n1Copy = n1.slice(0, m);
    let x = 0;
    let y = 0;

    for (let i = 0; i < m + n; i++) {
        if (y >= n || (x < m && n1Copy[x] <= n2[y])) {
            n1[i] = n1Copy[x];
            x++;
        } else {
            n1[i] = n2[y];
            y++;
        }
    }
    return n1;
}



// Approach 2

function merge(n1, m, n2, n) {
    let x = m - 1;
    let y = n - 1;
    let k = m + n - 1;
    for(let i = k; i >= 0; i--) {
        if(y < 0) {
            break;
        }
        if ( x >= 0 && n1[x] > n2[y]) {
            n1[i] = n1[x];
            x--;
        } else {
            n1[i] = n2[y];
            y--;
        }
    }
    return n1;
}

let n1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let n2 = [2, 5, 6];
let n = 3;

console.log(merge(n1, m, n2, n));

// while loop approach---

function merge(n1, m, n2, n) {
    let x = m - 1;
    let y = n - 1;
    let k = m + n - 1;

    while (y >= 0) {
        if (x >= 0 && n1[x] > n2[y]) {
            n1[k] = n1[x];
            x--;
        } else {
            n1[k] = n2[y];
            y--;
        }
        k--;
    }

    return n1;
}
