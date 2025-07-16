let arr = [2,4,1];

function sellBuy(arr) {
    let min = arr[0]
    let max = -1
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            x = i
            min = arr[i]
        }else if (arr[i] - min > max) {
            max = arr[i] - min;
        }
    }

    return max;
}
console.log(sellBuy(arr));