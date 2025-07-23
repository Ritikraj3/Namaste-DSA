function fun() {
    console.log("Ritik");
    fun()
}
 
// fun()

function fact(num){
    if (num == 0) {
        return
    }
    console.log(num);
    num--
    fact(num)
}
let a = 5
fact(a)
