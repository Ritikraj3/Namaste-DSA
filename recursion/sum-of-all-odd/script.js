let arr = [5,3,2,10,1];

function sum(n) {
    let isOdd = arr[n] % 2 != 0;
    if (n == 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1));