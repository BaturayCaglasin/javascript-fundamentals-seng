const age = 4;
let century;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("He is older than 18.")
}
else {
    const yearleft = 18 - age;
    console.log(`He is smaller than 18. Remaining year: ${yearleft}`);
}

const birthYear = 1995;

if (birthYear <= 2000) {
    century = 20;
}
else if (1800 < birthYear < 1999) {
    century = 19;
}
else {
    century = 21;
}

console.log(`century is:${century}`);

const inputYear = '1991';
const outputYear = (Number(inputYear) + 10);
console.log(outputYear);
if (outputYear == '2001') {
    console.log("The year is 2001");
    console.log(outputYear + 10);
}

const money = 0;
if (money) {
    console.log("Don't spend it all.");
}
else {
    console.log("You don't have any money. You should get a job.");
}

let height;
if (height) {
    console.log("yay! Height is defined.");
}
else {
    console.log("height is undefined.");
}

const myage = 27;

if (myage === 27) console.log("You are age 27");

//=== exatcly the same (type'ları da birbirine eşit olmalı.)
//==type coarsion. "18"==18 true döner. Biri string diğeri ise number olmasına rağmen



