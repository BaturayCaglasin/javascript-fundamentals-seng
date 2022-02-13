//const userAge = prompt("Enter your age");
//if (userAge == 27) alert("Your age is 27!");

function logger() {
    console.log("My name is batu");
}
//calling, running or envoking the function.
logger();

console.log(logger.name);

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 5);
const appleOrangeJuice = fruitProcessor(5, 5);

console.log(appleJuice);
console.log(orangeJuice);
console.log(appleOrangeJuice);
console.log(appleJuice, orangeJuice, appleOrangeJuice);

//FUNCTION WITH NAMES - LIKE JAVA: 
//FUNCTION DECLERATION

function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;
}
const age1 = calcAge1(1995);
console.log(age1);

//or 

//FUNCTION WITHOUT NAMES:
//FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);


//ARROW FUNCTION 

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`
}

console.log("Years until retirement:" + " " + yearsUntilRetirement(1995, "Baturay") + " " + "years later.");

