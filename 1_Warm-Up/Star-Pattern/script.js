let n = 4;

for (let i = 0; i < n; i++) {
    let row = " "
    for (let j = 0; j < n; j++){
        row += "* "
    }
    console.log(row);
}

console.log("2nd pattern");

for (let i = 0; i < n; i++) {
    let row = " "
    for (let j = 0 ; j <= i; j++){
        row += "* "
    }
    console.log(row);
}



console.log("3rd pattern");
 n = 5;
for (let i = 0; i < n; i++) {
    let row = " "
    for (let j = 0 ; j <= i; j++){
        row += j+1
    }
    console.log(row);
}

console.log("4th pattern");

n = 5;
for (let i = 0; i < n; i++) {
    let row = " "
    for (let j = 0 ; j< n-(i-1); j++){
        row += " "
    }
    for (let k = 0 ; k< i + 1; k++){
        row += "*"
    }
    console.log(row);
}

console.log("5th pattern");

n=5;
for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row += toggle; 
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}

console.log('6th pattern');

n=5;
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += toggle; 
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}