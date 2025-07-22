
function sellBuy(arr) {
    debugger
    let min = arr[0]
    let max = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] - min > max) {
            max = arr[i] - min;
        }
    }
    
    return max; 
}
let arr = [2,4,1,8,10];
console.log(sellBuy(arr)); 