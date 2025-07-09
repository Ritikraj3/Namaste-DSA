for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(i,j);
    }
}
console.log("2nd loop");
for (let i =0; i < 4; i++) {
    for (let j = i; j > 0; j--) {
        console.log(i,j);
    }
}

console.log("3rd loop");

for (let i = 0; i < 3; i++) {
    for (let j = i; j >=0; j--) {
        console.log(i,j);
    }
}

console.log("4th loop");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i,j);
    }
}