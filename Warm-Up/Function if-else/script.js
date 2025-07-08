function greet (name) {
    console.log("namaste" +' '+ name);
}

greet("Ritik");

function square (num) {
    let result =  num * num;

    return result;
}

let value = square(5);
console.log(value);

function isEligibleToVote (age) {
    if (age > 18) {
        console.log("Eligible to vote");
    } else if (age < 0) {
        console.log("Invalid age");
    }
    else {
        console.log("Not eligible to vote");    
    }
}

isEligibleToVote(19);

function isEvenOrOdd (num) {
    (num%2==0)?console.log("Even"):console.log("Odd");
}

isEvenOrOdd(5);