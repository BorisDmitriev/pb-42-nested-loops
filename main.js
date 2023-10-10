//1
let char = '*';
for (let i = 1; i <= 4; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += char;
    }
    console.log(str);
}

//2
const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (let i = 0; i < ARR.length - 1; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < ARR[i].length; j++) {
        console.log(ARR[i][j]);
    }
}

//3
console.log("***********Aufgabe 3****************");
let num = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        num += i + " ";
    }
    if (i === 4) console.log(num.trim());
}

let num2 = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 4; j++) {
        num2 += j + " ";
    }
    if (i === 2) console.log(num2.trim());
}


//bonus
console.log("***********Bonus****************");
let num_ = "";
let num2_ = "";
for (let i = 1; i <= 4; i++) {

    if (i <= 4) {
        for (let j = 0; j < 3; j++) {
            num_ += i + " ";
        }
    }
    
    if (i <= 3) {
        for (let j = 0; j <= 4; j++) {
            num2_ += j + " ";
        }
    }

    if(i === 4){
        console.log(num_.trim());
        console.log(num2_.trim());
    }
}
