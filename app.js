console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    } else {
        continue;
    }
}
console.log(" ");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(i)
    }
}
console.log(" ");

 //Exercise 3 Section
console.log("Exercise 3:\n==========\n");
console.log("Exc.1 While Loop");
 let i = 0;
 while (i < 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++
 }
console.log(" ");

console.log("Exc.1 Do While Loop");
 let n = 0;
do {
    if(n % 2 != 0) {
    console.log(n);
    }
    n++
} while (n < 100);
console.log(" ")

console.log("Exc.2 While Loop");
 let x = 0;
 while (x <=100) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x);
    }
    x++
 }
 console.log(" ")

console.log("Exc.2 Do While Loop");
 let y = 0;