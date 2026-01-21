console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
console.log(" ");


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FIZZBUZZ: ${i}`);
    } else if (i % 3 == 0) {
        console.log(`FIZZ: ${i}`);
    } else if (i % 5 == 0) {
        console.log(`BUZZ: ${i}`);
    } else {
        console.log(i)
    }
}
console.log(" ");


 // Exercise 3 Section
console.log("Exercise 3:\n==========\n");

console.log("Exc3:1 While Loop");
 let i = 0;
 while (i < 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++
 }
console.log(" ");


console.log("Exc3:1 Do While Loop");
 let n = 0;
do {
    if(n % 2 != 0) {
    console.log(n);
    }
    n++
} while (n < 100);
console.log(" ");


console.log("Exc3:2 While Loop");
 let x = 0;
 while (x <=100) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(`FIZZBUZZ`);
    } else if (x % 3 == 0) {
        console.log(`FIZZ`) 
    } else if (x % 5 == 0) {
        console.log(`BUZZ`)
    } else {
        console.log(x);
    }
    x++
 }
 console.log(" ");


console.log("Exc3:2 Do While Loop");
 let y = 0;
 do { //console.log(y);
    if (y % 3 == 0 && y % 5 == 0) {
        console.log(`FIZZBUZZ`);
    } else if (y % 3 == 0) {
        console.log(`FIZZ`);
    } else if (y % 5 == 0) {
        console.log(`BUZZ`);
    } else {
        console.log(y);
    }
    y++
 } while (y <= 100);
console.log(" ");


 // Exercise 4 Section
 console.log("Exercise 4:\n==========\n");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let z = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(let i = 0; i <= z; i++) {
    if (i == value) {
    console.log(`Found Value! : ${value}`);
    break;
    } if (i == n) {
        console.log(`Didn't find Value : ${value}`);
        break;
    }
}
console.log(" ");


// Exercise 5 Section